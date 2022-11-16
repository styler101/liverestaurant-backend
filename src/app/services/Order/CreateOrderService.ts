import { CreateOrder } from '../../usecases/NewOrders/CreateOrder'
import { OrderModel, CreatedOrderModel } from '../../usecases/NewOrders/models/Order'
import { Order } from '../../models/Order'

class CreateOrderService implements CreateOrder {
  async createOrder (payload: OrderModel): Promise<CreatedOrderModel | any> {
    const { table, products } = payload
    if (!table) throw new Error('Field table is required')
    if (products.length <= 0) throw new Error('You must provided at least one product to the table')
    const order = await Order.create({ table, products })
    return order
  }
}

export default CreateOrderService
