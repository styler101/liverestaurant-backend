import { Router } from 'express'

import upload from '../config/upload'
import { listCategories } from './usecases/categories/listCategories'
import { createCategory } from './usecases/categories/createCategory'
import { listProducts } from './usecases/products/listProducts'
import { creatProduct } from './usecases/products/createProduct'
import { listProductsByCategory } from './usecases/categories/listProductsByCategory'

export const router = Router()
// user and admin
// List all Categories

router.get('/categories', listCategories)
// admin
// Create category
router.post('/category', createCategory)

// user and admin
// List products
router.get('/products', listProducts)

// users and admin
// Create Products

router.post('/product', upload.single('image'), creatProduct)

// Get product by category
router.get('/categories/:categoryId/products', listProductsByCategory)
// List order

router.get('/orders', (request, response) => {
  response.send('ok')
})
// Create Order

router.post('/orders', (request, response) => {
  response.send('ok')
})
// Change order status

router.patch('/orders/:orderId', (request, response) => {
  response.send('ok')
})

// Delete / cancelar o pedido
router.delete('/orders/:orderId', (request, response) => {
  response.send('ok')
})
