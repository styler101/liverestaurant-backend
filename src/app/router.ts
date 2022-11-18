import { Router } from 'express'
import { routes } from './routerlist'

export const router = Router()
routes.forEach((route) => router.use(route))
