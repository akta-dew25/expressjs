import express from 'express'
import { authMiddleWare } from '../../middleware/auth.js'
import getAllUsersController from '../../controller/v1/user.js'



const userRouter = express.Router()

userRouter.get('/userdetails',authMiddleWare,getAllUsersController)

export default userRouter