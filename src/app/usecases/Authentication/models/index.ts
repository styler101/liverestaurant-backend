import { MongooseTypeId } from '../../../types/interfaces'

export interface AuthenticationRequest {
  email: string
  password: string
}

export interface AuthenticationModel {
  _id: MongooseTypeId
  email: string
  name: string
  accessToken: string
}
