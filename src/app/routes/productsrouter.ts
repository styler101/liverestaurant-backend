import { Router } from 'express'
import upload from '../config/upload'
import ProductController from '../controllers/Product/ProductController'
import authmiddleware from '../middlewares/authmiddlewares'
export const productRouter = Router()

productRouter.get('/products', ProductController.index)
productRouter.post('/product', authmiddleware, upload.single('image'), ProductController.store)
