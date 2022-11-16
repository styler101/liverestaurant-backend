import { MongooseTypeId } from '../../types/interfaces'

export interface CancelOrderStatus {
  orderId: MongooseTypeId | string
}
