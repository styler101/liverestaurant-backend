import { Request, Response, NextFunction } from 'express'
import { User } from '../models/User'
import jwt from 'jsonwebtoken'

interface TokenPayload {
  id: string
  iat: number
  exp: number
}
export default async function authmiddleware(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const { authorization } = request.headers

  if (!authorization) {
    return response.status(401).json({
      success: false,
      message: "You don't have access to this action",
    })
  }

  const token = String(authorization).replace('Bearer', '').trim()

  try {
    // @ts-expect-error
    const data = jwt.verify(token, process.env.TOKEN_SECRET)
    // @ts-expect-error
    const { id } = data as TokenPayload
    const findUserRoleById = await User.findById(id)
    if (findUserRoleById?.role === 'admin') {
      request.userId = id
      return next()
    }
    return response.status(401).json({
      success: false,
      message: "Only admin users can't access this part",
    })
  } catch {
    return response.status(401).json({
      success: false,
      message: "You don't have access to this action",
    })
  }
}
