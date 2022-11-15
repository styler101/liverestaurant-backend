import { Request, Response } from 'express'
import { Order } from '../../models/Order'
export async function cancelOrder (request: Request, response: Response) {
  try {
    const { orderId } = request.params
    await Order.findByIdAndDelete(orderId)
    return response.sendStatus(204)
  } catch (error) {
    return response.status(400).json({ success: false, message: error })
  }
}
