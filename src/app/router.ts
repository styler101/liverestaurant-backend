import { Router } from 'express'

import upload from './config/upload'
import { categoryRouter } from './routes/categoriesrouter'

import { creatProduct } from './usecases/products/createProduct'

import { listOrders } from './usecases/orders/listOrders'
import { createOrder } from './usecases/orders/createOrder'
import { updateOrderStatus } from './usecases/orders/updateOrderStatus'
import { cancelOrder } from './usecases/orders/cancelOrder'

export const router = Router()
router.use(categoryRouter)
// user and admin
// List products

router.get('/categories/:categoryId/products', listProductsByCategory)
// router.get('/products', listProducts)

// users and admin
// Create Products

router.post('/product', upload.single('image'), creatProduct)

// Get product by category
// router.get('/categories/:categoryId/products', listProductsByCategory)
// List order

router.get('/orders', listOrders)
// Create Order

router.post('/order', createOrder)
// Change order status

router.patch('/orders/:orderId', updateOrderStatus)

// Delete / cancelar o pedido
router.delete('/orders/:orderId', cancelOrder)
