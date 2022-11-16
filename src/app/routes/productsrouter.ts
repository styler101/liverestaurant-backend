import { Router } from 'express'
import upload from '../config/upload'
import ProductController from '../controllers/ProductController'
export const productRouter = Router()

productRouter.get('/products', ProductController.index)
productRouter.post('/product', upload.single('image'), ProductController.store)
