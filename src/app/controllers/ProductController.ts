import { Request, Response } from 'express'
import { ListProductsService, CreateProductService } from '../services/Products'

class ProductController {
  async index (request: Request, response: Response) {
    try {
      const listProductService = new ListProductsService()
      const categories = listProductService.exec()
      return response.status(200).json({ success: true, categories })
    } catch (error) {
      return response.status(400).json({ success: false, message: error })
    }
  }

  async store (request: Request, response: Response) {
    try {
      const imagePath = request.file?.filename
      const { name, description, price, category, ingredients } = request.body
      const createProductService = new CreateProductService()
      const product = await createProductService.exec({
        name,
        description,
        price,
        imagePath: imagePath || '',
        ingredients,
        category
      })
      return response.status(201).json({ success: true, product })
    } catch (error) {
      return response.status(400).json({ success: false, message: error })
    }
  }
}

export default new ProductController()
