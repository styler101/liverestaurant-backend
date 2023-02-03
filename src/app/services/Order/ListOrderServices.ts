import { Order } from '../../models/Order'

class ListOrderService {
  async exec (): Promise<any> {
    const orders = await Order.find().populate('products.product').sort({ createAt: 1 })
    return orders
  }
}

export default ListOrderService
