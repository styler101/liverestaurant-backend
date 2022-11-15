import { Request, Response } from 'express'
import { Order } from '../../models/Order'
export async function createOrder (request: Request, response: Response) {
  try {
    const { table, products } = request.body
    const order = await Order.create({ table, products })
    return response.status(201).json({ success: true, order })
  } catch (error) {
    return response.status(400).json({ success: true, message: error })
  }
}
