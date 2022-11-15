import { Request, Response } from 'express'
import { Product } from '../../models/Product'

export async function listProducts (request: Request, response: Response) {
  try {
    const products = await Product.find()
    return response.status(200).json({ success: true, data: products })
  } catch {
    return response.status(400).json({ success: false, message: 'Invalid Request' })
  }
}
