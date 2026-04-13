import express from 'express'
import { registerController, loginController } from '../../controller/v1/auth.js'
import { authMiddleWare } from '../../middleware/auth.js'

const authRouter = express.Router()


authRouter.post('/register', registerController)
authRouter.post('/login', loginController)


export default authRouter
