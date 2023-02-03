import { CreateOrder } from '../../usecases/NewOrders/CreateOrder'
import { OrderModel, CreatedOrderModel } from '../../usecases/NewOrders/models/Order'
import { Order } from '../../models/Order'
import { AppError } from '../../errors/AppError'

class CreateOrderService implements CreateOrder {
  async createOrder (payload: OrderModel): Promise<CreatedOrderModel | any> {
    const { table, products } = payload
    if (!table) throw new AppError('Field table is required', 400)
    if (products.length <= 0) throw new AppError('You must provided at least one product to the table', 400)
    const order = await Order.create({ table, products })
    return order
  }
}

export default CreateOrderService
