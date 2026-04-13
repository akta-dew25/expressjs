import express from 'express'
import { authMiddleWare } from '../../middleware/auth.js'
import { getProfileController } from '../../controller/v1/profile.js'



const profileRouter = express.Router()

profileRouter.get('/details',authMiddleWare,getProfileController)

export default profileRouter