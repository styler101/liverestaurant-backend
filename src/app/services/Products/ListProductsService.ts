
import { Product } from '../../models/Product'
import { ListProducts } from '../../usecases/Products/ListProducts'

class ListProductsService {
  async exec (): Promise<ListProducts[]> {
    const products = await Product.find()
    return products
  }
}

export { ListProductsService }
