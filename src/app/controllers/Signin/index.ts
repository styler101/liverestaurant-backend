import { Request, Response } from 'express'
import AuthenticationService from '../../services/Authentication'

class SignInController {
  async auth (request: Request, response: Response) {
    try {
      const { email, password } = request.body
      const authencationService = new AuthenticationService()
      const data = await authencationService.auth({ email, password })
      return response.status(200).json({ success: true, data })
    } catch (error: any) {
      return response.status(error.getStatus()).json({ success: false, message: error.getMessage() })
    }
  }
}

export default new SignInController()
