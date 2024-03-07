const express = require('express')
const { validateBody, authenticate } = require('../../middlewares')
const { registerSchema, loginSchema } = require('../../models')
const { register, login, getCurrent, logout } = require('../../controllers/auth')


const authRouter = express.Router()

// signup
authRouter.post("/register",  validateBody(registerSchema), register )
// signin
authRouter.post("/login", validateBody(loginSchema), login)

authRouter.get("/current", authenticate,  getCurrent);

authRouter.post("/logout", authenticate,  logout);

// authRouter.patch("/subscription",  authenticate,
//     validateBody(schemas.subscriptionSchema), controllers.updateSubscription)

// authRouter.patch("/avatars", authenticate, upload.single("avatar"), controllers.updateAvatar);

module.exports = authRouter