import mongoose from "mongoose"
import bcrypt from "bcryptjs"
import moment from "moment-timezone"
import jwt from "jwt-simple"
import { env, jwtSecret, jwtExpirationInterval } from "config/server.json"
import httpStatus from "http-status"
import APIError from "../utils/APIError"

/**
 * User Schema
 * @private
 */
const userSchema = new mongoose.Schema({
  email: {
    type: String,
    match: /^\S+@\S+\.\S+$/,
    required: true,
    unique: true,
    trim: true,
    lowercase: true,
  },
  password: {
    type: String,
    required: true,
    minlength: 6,
    maxlength: 128,
  }
})

userSchema.pre("save", async function save(next) {
  try {
    if (!this.isModified("password")) return next()

    const rounds = env === "test" ? 1 : 10

    const hash = await bcrypt.hash(this.password, rounds)
    this.password = hash

    return next()
  } catch (error) {
    return next(error)
  }
})

userSchema.pre("update", async function save(next) {
  try {
    const password = this.getUpdate().$set.password
    const pin = this.getUpdate().$set.pin
    if (!password && !pin) return next()

    const rounds = env === "test" ? 1 : 10
    if (password) {
      const hashPassword = await bcrypt.hash(password, rounds)
      this.getUpdate().$set.password = hashPassword
    }
    if (pin) {
      const hashPin = await bcrypt.hash(pin, rounds)
      this.getUpdate().$set.pin = hashPin
    }

    return next()
  } catch (error) {
    return next(error)
  }
})

/**
 * Methods
 */
userSchema.method({
  transform() {
    const transformed = {}
    const fields = ["id", "email"]

    fields.forEach((field) => {
      transformed[field] = this[field]
    })

    return transformed
  },

  token() {
    const playload = {
      exp: moment().add(jwtExpirationInterval, "minutes").unix(),
      iat: moment().unix(),
      sub: this._id,
    }
    return jwt.encode(playload, jwtSecret)
  },

  async passwordMatches(password) {
    const matches = await bcrypt.compare(password, this.password)
    return matches
  },
})

userSchema.statics = {
  async get(id) {
    try {
      let user

      if (mongoose.Types.ObjectId.isValid(id)) {
        user = await this.findById(id).exec()
      }

      if (!user) {
        throw new APIError({ message: "User does not exist", status: httpStatus.NOT_FOUND })
      }

      return user
    } catch (error) {
      throw error
    }
  },

  async findAndGenerateToken(options) {
    const { email, password, refreshObject } = options
    if (!email) {
      throw new APIError({ message: "An email is required to generate a token", status: httpStatus.BAD_REQUEST })
    }

    const user = await this.findOne({ email }).exec()
    const err = {
      status: "UNAUTHORIZED",
      isPublic: true,
    }
    if (password) {
      if (user && await user.passwordMatches(password)) {
        return { user, accessToken: user.token() }
      }
      err.message = "Incorrect email or password"
    } else if (refreshObject) {
      return { user, accessToken: user.token() }
    } else {
      err.message = "Incorrect email or refreshToken"
    }

    throw new APIError({ message: "An email is required to generate a token", status: httpStatus.UNAUTHORIZED })
  }
}

/**
 * @typedef User
 */
export default mongoose.model("User", userSchema)
