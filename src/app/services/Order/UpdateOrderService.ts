import { UpdateOrder } from '../../usecases/NewOrders/UpdateOrderStatus'
import { Order } from '../../models/Order'
import { AppError } from '../../errors/AppError'
class UpdateOrderService {
  async exec ({ orderId, status }: UpdateOrder): Promise<void> {
    if (!orderId) throw new AppError('Missing param order Id', 400)
    if (!['WAITING', 'IN_PRODUCTION', 'DONE'].includes(status)) throw new AppError('Status should be one of these: WAITING, IN_PRODUCTION, DONE')
    await Order.findByIdAndUpdate(orderId, { status })
  }
}

export default UpdateOrderService
