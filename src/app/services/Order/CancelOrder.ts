import { CancelOrderStatus } from '../../usecases/NewOrders/CancelOrder'
import { Order } from '../../models/Order'
class CancelOrder {
  async exec (params: CancelOrderStatus): Promise<void> {
    const { orderId } = params
    await Order.findByIdAndDelete(orderId)
  }
}

export default CancelOrder
