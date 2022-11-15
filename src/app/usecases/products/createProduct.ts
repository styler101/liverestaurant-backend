import { Request, Response } from 'express'

export async function creatProduct (request: Request, response: Response) {
  try {
    console.log(request.body)
  } catch (error: any) {
    return response.status(400).json({ success: false, message: error.message })
  }
}
