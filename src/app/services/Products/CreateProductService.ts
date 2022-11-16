import { CreateProduct } from '../../usecases/Products/CreateProduct'
import { ProductModel } from '../../usecases/Products/models'
import { Product } from '../../models/Product'

class CreateProductService {
  async exec (data: CreateProduct): Promise<ProductModel> {
    const { name, category, description, imagePath, ingredients, price } = data
    if (!name) throw new Error('Field name is required')
    const product = await Product.create({ name, category, description, imagePath, ingredients, price })
    delete product.__v
    return product
  }
}

export { CreateProductService }
