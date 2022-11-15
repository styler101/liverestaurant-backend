import { Router } from 'express'

export const router = Router()
// user and admin
// List all Categories

router.get('/categories', (request, response) => {
  response.send('Ok')
})
// admin
// Create category
router.post('/category', (request, response) => {
  response.send('ok')
})

// user and admin
// List products
router.get('/products', (request, response) => {
  response.send('ok')
})

// users and admin
// Create Products

router.post('/products', (request, response) => {
  response.send('ok')
})

// Get product by category
router.get('/categories/:categoryId/products', (request, response) => {
  response.send('ok')
})
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
