import { MongooseTypeId } from '../../types/interfaces'

export interface UpdateOrder {
  orderId: MongooseTypeId | string
  status: 'WAITING' | 'IN_PRODUCTION' | 'DONE'
}
