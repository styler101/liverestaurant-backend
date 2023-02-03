import { Types } from 'mongoose'
export interface PersistListCategories {
  name: string
  icon: string
  _id: Types.ObjectId
}

export interface DomainListCategories {
  name: string
  icon: string
  id: Types.ObjectId
}
