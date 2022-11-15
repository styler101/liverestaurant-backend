import { Request, Response } from 'express'
import { Order } from '../../models/Order'
export async function updateOrderStatus (request: Request, response: Response) {
  try {
    const options = ['WAITING', 'IN_PRODUCTION', 'DONE']
    const { orderId } = request.params
    const { status } = request.body

    if (!options.includes(status)) return response.status(400).json({ success: false, message: 'Status should be one of these: WAITING, IN_PRODUCTION, DONE' })

    await Order.findByIdAndUpdate(orderId, { status })
    return response.sendStatus(204)
  } catch (error) {
    return response.status(400).json({ success: true, error })
  }
}
