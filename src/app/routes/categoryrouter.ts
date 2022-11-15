import { Router } from 'express'
import CategoryController from '../controllers/CategoryController'
const categoryRouter = Router()

// user and admin
// List all Categories

categoryRouter.get('/categories', CategoryController.index)
// admin
// Create category
categoryRouter.post('/category', CategoryController.store)

export { categoryRouter }
