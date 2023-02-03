import { Types } from 'mongoose'

interface MongooseTypeId extends Types.ObjectId {}

interface Ingredients {
  name: string
  icon: string

}

export interface ListProducts {
  _id: MongooseTypeId
  name: string
  description: string
  imagePath: string
  price: number
  ingredients?: Ingredients[]
  category: MongooseTypeId

}
