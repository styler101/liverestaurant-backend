import { Category as CategoryModel } from '../../usecases/Categories/CreateCategory'
import { Category } from '../../models/Category'

class CreateCategoryService {
  async exec ({ name, icon }: CategoryModel): Promise<CategoryModel> {
    if (!name) throw Error('Field name is required')

    if (!icon) throw Error('Field icon is required')

    const findCategoryByName = await Category.findOne().where('name').equals(name)

    if (findCategoryByName) throw Error('This category is already exists!')

    const category = await Category.create({ name, icon })
    return category
  }
}

export { CreateCategoryService }
