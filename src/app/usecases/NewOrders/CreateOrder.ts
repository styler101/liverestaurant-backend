import { CreatedOrderModel, OrderModel } from './models/Order'

export interface CreateOrder {
  createOrder: (order: OrderModel) => Promise<CreatedOrderModel>
}
