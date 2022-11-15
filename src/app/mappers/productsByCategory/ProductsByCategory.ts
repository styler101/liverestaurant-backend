
import { Ingredients, ProductsByCategory as ProductsByCategoryId } from '../../usecases/Categories/ListProductsByCategoryId'

class ProductsByCategory {
  toDomain (data: ProductsByCategoryId[]) {
    return data.map((item) => {
      return {
        id: item.id,
        name: item.name,
        description: item.description,
        imagePath: item.imagePath,
        price: item.price,
        ingredients: item.ingredients.map((ingrident: Ingredients) => ({ id: ingrident.id, name: ingrident.name, icon: ingrident.icon })),
        categoryId: item.category
      }
    })
  }
}

export default new ProductsByCategory()
