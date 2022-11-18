import { categoryRouter } from './routes/categoriesrouter'
import { orderRouter } from './routes/ordersrouter'
import { peoplesRouter } from './routes/peoplesrouter'
import { productRouter } from './routes/productsrouter'
import { userRouter } from './routes/usersrouter'

export const routes = [
  categoryRouter,
  orderRouter,
  peoplesRouter,
  productRouter,
  userRouter
]
