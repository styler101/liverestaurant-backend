import { Router } from 'express'
import OrderController from '../controllers/OrderController'
const orderRouter = Router()

orderRouter.get('/orders', OrderController.index)
orderRouter.post('/order', OrderController.store)

orderRouter.patch('/orders/:orderId', OrderController.update)

// Delete / cancelar o pedido
orderRouter.delete('/orders/:orderId', OrderController.delete)
export { orderRouter }
