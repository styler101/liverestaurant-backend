import { Category as CategoryModel } from '../../usecases/Categories/CreateCategory'
import { Category } from '../../models/Category'
import { AppError } from '../../errors/AppError'

class CreateCategoryService {
  async exec ({ name, icon }: CategoryModel): Promise<CategoryModel> {
    const fields: any = { name, icon }

    for (const field in fields) {
      if (!fields[field]) {
        console.log(fields)
        throw new AppError(`Field ${field} is required`, 400)
      }
    }
    const findCategoryByName = await Category.findOne().where('name').equals(name)

    if (findCategoryByName) throw new AppError('This category is already exists!', 400)

    const category = await Category.create({ name, icon })
    return category
  }
}

export { CreateCategoryService }
