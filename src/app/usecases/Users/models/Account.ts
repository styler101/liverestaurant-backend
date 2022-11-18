import { MongooseTypeId } from '../../../types/interfaces'

export interface Account {
  name: string
  email: string
  password: string
  role: 'user' | 'admin'
}

export interface AccountModel {
  _id: MongooseTypeId
  name: string
  email: string
  password: string
}
