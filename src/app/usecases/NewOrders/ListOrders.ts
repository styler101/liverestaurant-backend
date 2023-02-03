import { MongooseTypeId } from '../../types/interfaces'

interface Ingredients {
  name: string
  icon: string
}
interface Product {
  _id: MongooseTypeId
  name: string
  description: string
  imagePath: string
  price: number
  ingredients: Ingredients[]
  category: MongooseTypeId

}
export interface Orders {
  _id: MongooseTypeId
  table: string
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
  products: Product[]
  createdAt: Date
}

export interface UpdateOrderStatus {
  orderId: MongooseTypeId
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
}
