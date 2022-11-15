import { Request, Response } from 'express'
import { Order } from '../../models/Order'

export async function listOrders (request: Request, response: Response) {
  try {
    const orders = await Order.find().populate('products.product').sort({ createdAt: 1 })
    return response.status(200).json({ success: true, data: orders })
  } catch (error) {
    return response.status(400).json({ success: false, message: error })
  }
}
