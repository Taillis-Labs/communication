import express from "express"
import { default as routes } from "server/api/controllers/user.controller"

const router = express.Router()

router.post("/login", routes.login)

export default router
