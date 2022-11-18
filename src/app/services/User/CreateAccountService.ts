import { hash } from 'bcryptjs'
import { User } from '../../models/User'
import { Controller } from '../../usecases/Users'
import { Account, AccountModel } from '../../usecases/Users/models/Account'
import { isValidEmail } from '../../utils/validators'
import AppError from '../../Errors/AppError'

class CreateAccountService implements Controller {
  async createAccount ({ email, name, password, role }: Account): Promise<AccountModel> {
    const fields: any = { name, email, password }
    for (const field in fields) {
      if (!fields[field]) throw new AppError(400, `The field ${field} is required`)
    }
    if (!isValidEmail(email)) throw new AppError(400, 'Please provided a valid email')

    const hashedPassword = await hash(password, 8)
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      role
    })

    return user
  }
}

export { CreateAccountService }
