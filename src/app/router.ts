import { Router } from 'express'

import { categoryRouter } from './routes/categoriesrouter'
import { productRouter } from './routes/productsrouter'
import { orderRouter } from './routes/ordersrouter'

import { cancelOrder } from './usecases/orders/cancelOrder'

export const router = Router()
router.use(categoryRouter)
router.use(productRouter)
router.use(orderRouter)

// Delete / cancelar o pedido
router.delete('/orders/:orderId', cancelOrder)
