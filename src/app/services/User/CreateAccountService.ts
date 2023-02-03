import { hash } from 'bcryptjs'
import { User } from '../../models/User'
import { Controller } from '../../usecases/Users'
import { Account, AccountModel } from '../../usecases/Users/models/Account'
import { isValidEmail } from '../../utils/validators'
import { AppError } from '../../errors/AppError'

class CreateAccountService implements Controller {
  async createAccount ({ email, name, password, role }: Account): Promise<AccountModel> {
    const fields: any = { name, email, password }
    for (const field in fields) {
      if (!fields[field]) throw new AppError(`The field ${field} is required`, 400)
    }
    if (!isValidEmail(email)) throw new AppError('Please provided a valid email', 400)

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
