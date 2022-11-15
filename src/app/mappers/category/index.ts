import { ListCategories } from '../../usecases/Categories/ListCategories'

class CategoryMapper {
  toDomain (payload: ListCategories[]) {
    return payload.map((item) => ({
      icon: item.icon,
      name: item.name,
      id: item._id
    }))
  }
}

export default new CategoryMapper()
