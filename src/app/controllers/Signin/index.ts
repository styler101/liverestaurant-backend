import { Request, Response } from 'express'
import AuthenticationService from '../../services/Authentication'

class SignInController {
  async auth (request: Request, response: Response) {
    try {
      const { email, password } = request.body
      const authencationService = new AuthenticationService()
      const auth = await authencationService.auth({ email, password })
    } catch (error) {
      return response.status(401).json({ message: error })
    }
  }
}

export default new SignInController()
