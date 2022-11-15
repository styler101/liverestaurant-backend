import { Request, Response } from 'express'
import { Category } from '../../models/Category'

export async function createCategory (request: Request, response: Response) {
  try {
    const { name, icon } = request.body
    if (!name) {
      return response.status(400).json({ success: false, message: 'Field name is required' })
    }

    if (!icon) {
      return response.status(400).json({ success: false, message: 'Field icon is required' })
    }

    const category = await Category.create({ name, icon })
    return response.status(201).json({ success: true, category })
  } catch (error: any) {
    return response.status(400).json({ success: false, message: error?.message })
  }
}
