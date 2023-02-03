import { DomainListCategories } from '../../usecases/Categories/ListCategories'
import { Category } from '../../models/Category'
import categoriesMapper from '../../mappers/categories/CategoriesMapper'

class ListCategoriesService {
  async exec (): Promise<DomainListCategories[]> {
    const categories = await Category.find()
    return categoriesMapper.toDomain(categories)
  }
}

export { ListCategoriesService }
