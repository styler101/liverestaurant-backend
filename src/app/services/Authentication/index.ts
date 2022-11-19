import jwt from 'jsonwebtoken'
import { Authentication } from '../../usecases/Authentication'
import { User } from '../../models/User'
import bcrypt from 'bcryptjs'
import { AuthenticationRequest, AuthenticationModel } from '../../usecases/Authentication/models'

class AuthenticationService implements Authentication {
  async auth ({ email, password }: AuthenticationRequest): Promise<AuthenticationModel> {
    const findUser = await User.findOne().where({ email })
    if (!findUser) throw new Error('Invalid Email')
    const isValidPassword = await bcrypt.compare(password, findUser.password)
    if (!isValidPassword) throw new Error('Invalid Password')

    // @ts-expect-error
    const token = jwt.sign({ id: findUser._id }, process.env.TOKEN_SECRET, { expiresIn: '1d' })
    return { accessToken: token, _id: findUser._id, name: findUser.name, email: findUser.email }
  }
}

export default AuthenticationService
