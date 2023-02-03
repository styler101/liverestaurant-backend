
import { Product } from '../../models/Product'
import productsByCategory from '../../mappers/productsByCategory/ProductsByCategory'

class ListProductByCategory {
  async exec (categoryId: number): Promise<any> {
    const findCategoryById = await Product.find().where('category').equals(categoryId)
    // @ts-expect-error
    const mapperCategories = productsByCategory.toDomain(findCategoryById)
    return mapperCategories
  }
}

export default ListProductByCategory
