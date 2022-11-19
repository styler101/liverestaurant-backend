import { Router } from 'express'
import upload from '../config/upload'
import PeopleController from '../controllers/People/PeopleController'
export const peoplesRouter = Router()

peoplesRouter.post('/people', upload.single('avatar'), PeopleController.store)
