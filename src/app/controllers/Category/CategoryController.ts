import { Request, Response } from 'express'
import { CreateCategoryService, ListCategoriesService } from '../../services/Category'

class CategoryController {
  async index (request: Request, response: Response) {
    try {
      const listCategorieService = new ListCategoriesService()
      const categories = await listCategorieService.exec()
      return response.status(200).json({ success: true, categories })
    } catch (error: any) {
      return response.status(error.getStatus()).json({ success: false, message: error.getMessage() })
    }
  }

  // async show (request: Request, response: Response) {}
  async store (request: Request, response: Response) {
    try {
      const { name, icon } = request.body
      const categoryService = new CreateCategoryService()
      const category = await categoryService.exec({ icon, name })
      return response.status(201).json({ success: true, category })
    } catch (error: any) {
      return response.status(error.getStatus()).json({ success: false, message: error.getMessage() })
    }
  }

  // async update (request: Request, response: Response) {}
  // async delete (request: Request, response: Response) {}
}

export default new CategoryController()
