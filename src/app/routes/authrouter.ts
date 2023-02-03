import { Router } from 'express'
import SignController from '../controllers/Signin'

export const authRouter = Router()

authRouter.post('/signin', SignController.auth)
