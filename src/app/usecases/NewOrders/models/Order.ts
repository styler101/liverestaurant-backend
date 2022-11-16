import { MongooseTypeId } from '../../../types/interfaces'
interface Products {
  icon: string
  name: string
}

export interface OrderModel {
  table: string
  products: Products[]

}

interface CreatedOrder {
  table: string
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
  products: Array<{
    product: MongooseTypeId
    quantity: number
    _id: MongooseTypeId
  }>
  _id: MongooseTypeId
  createdAt: Date
  __v: 0
}

export interface CreatedOrderModel {
  order: CreatedOrder

}
