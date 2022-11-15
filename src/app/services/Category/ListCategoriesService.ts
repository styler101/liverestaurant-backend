import { ListCategories } from '../../usecases/Categories/ListCategories'
import { Category } from '../../models/Category'

class ListCategoriesService {
  async exec (): Promise<ListCategories[]> {
    const categories = await Category.find()
    return categories
  }
}

export { ListCategoriesService }
