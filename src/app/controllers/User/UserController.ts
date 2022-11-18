import { Request, Response } from 'express'
import { CreateAccountService } from '../services/User/CreateAccountService'

class UserController {
  async store (request: Request, response: Response) {
    try {
      const { name, email, password, role } = request.body
      const createUserService = new CreateAccountService()
      const user = await createUserService.createAccount({ name, email, password, role })
      // @ts-expect-error
      delete user.__v
      return response.status(201).json({ success: true, user })
    } catch (error) {
      // @ts-expect-error
      return response.status(400).json({ message: error.message })
    }
  }
}

export default new UserController()
