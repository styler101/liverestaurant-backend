import { Router } from 'express'
import upload from '../config/upload'
import PeopleController from '../controllers/People/PeopleController'

import authmiddleware from '../middlewares/authmiddlewares'

export const peoplesRouter = Router()

peoplesRouter.post('/people', upload.single('avatar'), PeopleController.store)
peoplesRouter.get('/peoples', authmiddleware, PeopleController.index)
peoplesRouter.get('/peoples.xlsx', PeopleController.extract)
