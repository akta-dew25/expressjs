import express from 'express'
import authRouter from './auth.js'
import profileRouter from './profile.js'
import userRouter from './user.js'

const router = express.Router()

router.use('/auth', authRouter)
router.use('/profile',profileRouter)
router.use('/users',userRouter)

export default router
