import { AuthenticationRequest, AuthenticationModel } from './models'

export interface Authentication {
  auth: (authentication: AuthenticationRequest) => Promise<AuthenticationModel>
}
