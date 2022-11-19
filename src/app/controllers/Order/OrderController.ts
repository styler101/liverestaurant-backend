import { Request, Response } from 'express'
import ListOrderService from '../../services/Order/ListOrderServices'
import CreateOrderService from '../../services/Order/CreateOrderService'
import UpdatedOrderStatusService from '../../services/Order/UpdateOrderService'
import CancelOrder from '../../services/Order/CancelOrder'

class OrderController {
  async index (request: Request, response: Response) {
    try {
      const ordersService = new ListOrderService()
      const orders = await ordersService.exec()
      return response.status(200).json({ success: true, orders })
    } catch (error: any) {
      return response.status(error.getStatus()).json({ success: false, message: error.getMessage() })
    }
  }

  async store (request: Request, response: Response) {
    try {
      const { table, products } = request.body
      const createOrderService = new CreateOrderService()
      const order = await createOrderService.createOrder({ products, table })
      return response.status(201).json({ success: true, order })
    } catch (error: any) {
      return response.status(error.statusCode()).json({ success: false, message: error.getMessage() })
    }
  }

  async update (request: Request, response: Response) {
    try {
      const { orderId } = request.params
      const { status } = request.body
      const createOrderService = new UpdatedOrderStatusService()
      await createOrderService.exec({ orderId, status })
      return response.status(201).json({ success: true })
    } catch (error: any) {
      return response.status(error.getStatus()).json({ success: false, message: error.getMessage() })
    }
  }

  async delete (request: Request, response: Response) {
    try {
      const { orderId } = request.params
      if (!orderId) return response.status(400).json({ message: 'Missing param order ID' })
      const createOrderService = new CancelOrder()
      await createOrderService.exec({ orderId })
      return response.status(201).json({ success: true })
    } catch (error: any) {
      return response.status(error.getStatus()).json({ success: false, message: error.getMessage() })
    }
  }
}

export default new OrderController()
