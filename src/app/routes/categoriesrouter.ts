import { Router } from 'express'
import CategoryController from '../controllers/Category/CategoryController'
import CategoryProductController from '../controllers/Category/CategoryProductController'

const categoryRouter = Router()

// user and admin
// List all Categories
categoryRouter.get('/categories', CategoryController.index)
// admin
// Create category
categoryRouter.post('/category', CategoryController.store)

categoryRouter.get('/categories/:categoryId/products', CategoryProductController.getProductByCategoryId)

export { categoryRouter }
