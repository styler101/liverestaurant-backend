import jwt from 'jsonwebtoken'
import bcrypt from 'bcryptjs'
import { User } from '../../models/User'
import { Authentication } from '../../usecases/Authentication'
import { AuthenticationRequest, AuthenticationModel } from '../../usecases/Authentication/models'
import { AppError } from '../../errors/AppError'
class AuthenticationService implements Authentication {
  async auth ({ email, password }: AuthenticationRequest): Promise<AuthenticationModel> {
    const findUser = await User.findOne().where({ email })
    if (!findUser) throw new AppError('Invalid match fields', 401)
    const isValidPassword = await bcrypt.compare(password, findUser.password)
    if (!isValidPassword) throw new AppError('Invalid match fields', 401)

    // @ts-expect-error
    const token = jwt.sign({ id: findUser._id }, process.env.TOKEN_SECRET, { expiresIn: '1d' })
    return { accessToken: token, _id: findUser._id, name: findUser.name, email: findUser.email }
  }
}

export default AuthenticationService
