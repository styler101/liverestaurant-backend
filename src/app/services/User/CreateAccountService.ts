import { hash } from 'bcryptjs'
import { User } from '../../models/User'
import { CreateAccount } from '../../usecases/Users/CreateAccount'
import { Account, AccountModel } from '../../usecases/Users/models/Account'
import { isValidEmail } from '../../utils/validators'

class CreateAccountService implements CreateAccount {
  async createAccount ({ email, name, password, role }: Account): Promise<AccountModel> {
    const fields: any = { name, email, password }
    for (const field in fields) {
      if (!fields[field]) throw new Error(`The field ${field} is required`)
    }
    if (!isValidEmail(email)) throw new Error('Please provided a valid email')

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
