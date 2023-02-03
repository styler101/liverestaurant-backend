import { Request, Response } from 'express'
import { Product } from '../../models/Product'

class CategoryProductController {
  async getProductByCategoryId (request: Request, response: Response) {
    try {
      const { categoryId } = request.params
      const productsByCategory = await Product.find().where('category').equals(categoryId)
      return response.status(200).json({ success: true, data: productsByCategory })
    } catch (error: any) {
      return response.status(error.getStatus()).json({ success: false, message: error.getMessage() })
    }
  }
}
export default new CategoryProductController()
