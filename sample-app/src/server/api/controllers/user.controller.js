import moment from "moment-timezone"
import models from "server/api/models"
import APIError from "server/api/utils/APIError"
import httpStatus from "http-status"
import jwt from "jsonwebtoken"
import { jwtExpirationInterval, jwtSecret } from "config/server.json"

function generateTokenResponse(user, accessToken) {
  const tokenType = "Bearer"
  const expiresIn = moment().add(jwtExpirationInterval, "minutes")
  return { tokenType, accessToken, expiresIn }
}

const login = async (req, res, next) => {
  try {
    const { user, accessToken } = await models.User.findAndGenerateToken(req.body)
    const token = generateTokenResponse(user, accessToken)
    const userTransformed = user.transform()
    return res.json({ token, user: userTransformed })
  } catch (error) {
    return next(error)
  }
}


function authorize(req, res, next) {
  let token
  let error
  if (req.headers.authorization) {
    if (typeof req.headers.authorization !== "string" || req.headers.authorization.indexOf("Bearer ") === -1) {
      error = "Bad authorization header."
    } else {
      token = req.headers.authorization.split(" ")[1]
    }
  } else if (req.query && req.query.token) {
    token = req.query.token
  } else {
    error = "No token provided."
  }

  if (error) {
    return next(new APIError(`${error}`, httpStatus.UNAUTHORIZED, true))
  }

  return jwt.verify(token, jwtSecret, (err, decoded) => {
    if (err || !decoded) {
      return next(new APIError(`Bad token: ${err.name}`, httpStatus.UNAUTHORIZED, true))
    }
    return next()
  })
}

export default { login, authorize }