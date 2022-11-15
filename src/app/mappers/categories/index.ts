import { ListCategories } from '../../usecases/Categories/ListCategories'

class CategoriesMapper {
  toDomain (payload: ListCategories[]) {
    return payload.map((item) => ({
      icon: item.icon,
      name: item.name,
      id: item._id
    }))
  }
}

export default new CategoriesMapper()
