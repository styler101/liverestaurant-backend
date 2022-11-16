import { UpdateOrder } from '../../usecases/NewOrders/UpdateOrderStatus'
import { Order } from '../../models/Order'

class UpdateOrderService {
  async exec ({ orderId, status }: UpdateOrder): Promise<void> {
    if (!orderId) throw new Error('Missing param order Id')
    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) throw new Error('Status should be one of these: WAITING, IN_PRODUCTION, DONE')
    await Order.findByIdAndUpdate(orderId, { status })
  }
}

export default UpdateOrderService
