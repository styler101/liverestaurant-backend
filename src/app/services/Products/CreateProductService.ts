import { CreateProduct } from '../../usecases/Products/CreateProduct'
import { ProductModel } from '../../usecases/Products/models'
import { Product } from '../../models/Product'
import { AppError } from '../../errors/AppError'

class CreateProductService {
  async exec (data: CreateProduct): Promise<ProductModel> {
    const { name, category, description, imagePath, ingredients, price } = data
    const fields: any = { name, category, description, imagePath, price }
    for (const field in fields) {
      if (!fields[field]) throw new AppError(`The field ${field} is required`)
    }

    const product = await Product.create({
      name,
      category,
      description,
      imagePath,
      ingredients: ingredients || [],
      price
    })
    delete product.__v
    return product
  }
}

export { CreateProductService }
