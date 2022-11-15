import { Request, Response } from 'express'
import { Category } from '../../models/Category'

export async function listCategories (request: Request, response: Response) {
  const categories = await Category.find()
  console.log(categories)
  return response.status(200).json({ success: true, data: categories })
}
