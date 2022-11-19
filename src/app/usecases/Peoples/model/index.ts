import { MongooseTypeId } from '../../../types/interfaces'

export interface People {
  status: number
  name: string
  lastName: string
  email: string
  phone: string
  avatar?: any
  gender: 'M' | 'F' | 'O'
  birthDate: string
  address: string
  zipCode: string
  city: string
  uf: string

}

export interface PeopleModel {
  _id: MongooseTypeId
  status: number
  name: string
  lastName: string
  email: string
  phone: string
  avatar?: any
  gender: 'M' | 'F' | 'O'
  birthDate: string
  address: string
  zipCode: string
  city: string
  uf: string
  _v: number
}
