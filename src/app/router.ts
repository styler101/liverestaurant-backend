import { Router } from 'express'

import { categoryRouter } from './routes/categoriesrouter'
import { productRouter } from './routes/productsrouter'
import { orderRouter } from './routes/ordersrouter'
import { userRouter } from './routes/usersrouter'

export const router = Router()
router.use(categoryRouter)
router.use(productRouter)
router.use(orderRouter)
router.use(userRouter)
