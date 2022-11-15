import { Types } from 'mongoose'

export interface Ingredients {
  name: String
  icon: string
  id?: Types.ObjectId
}
export interface ProductsByCategory {
  id?: Types.ObjectId
  name: string
  description: string
  imagePath: string
  price: string
  ingredients: Ingredients[]
  category: Types.ObjectId
}

/*
import { Request, Response } from 'express'
import { Product } from '../../models/Product'

export async function listProductsByCategory (request: Request, response: Response) {
  try {
    const { categoryId } = request.params
    const productsByCategory = await Product.find().where('category').equals(categoryId)
    return response.status(200).json({ success: true, data: productsByCategory })
  } catch (error) {
    return response.status(400).json({ success: false, message: error })
  }
}

*/
