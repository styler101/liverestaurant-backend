import { Router } from 'express'

import UserController from '../controllers/User/UserController'

export const userRouter = Router()

userRouter.post('/signup', UserController.store)
