import { Request, Response } from 'express'
import { Product } from '../../models/Product'

class CategoryProductController {
  async getProductByCategoryId (request: Request, response: Response) {
    try {
      const { categoryId } = request.params
      const productsByCategory = await Product.find().where('category').equals(categoryId)
      return response.status(200).json({ success: true, data: productsByCategory })
    } catch (error) {
      return response.status(400).json({ success: false, message: error })
    }
  }
}
export default new CategoryProductController()
