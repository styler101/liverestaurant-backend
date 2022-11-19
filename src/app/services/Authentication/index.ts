import { Authentication } from '../../usecases/Authentication'
import { User } from '../../models/User'
import bcrypt from 'bcryptjs'
import { AuthenticationRequest, AuthenticationModel } from '../../usecases/Authentication/models'

class AuthenticationService implements Authentication {
  async auth ({ email, password }: AuthenticationRequest): Promise<any> {
    const findUser = await User.findOne().where({ email })
    if (!findUser) throw new Error('Invalid Email')
    const isValidPassword = await bcrypt.compare(password, findUser.password)
    if (!isValidPassword) throw new Error('Invalid Password')
  }
}

export default AuthenticationService
