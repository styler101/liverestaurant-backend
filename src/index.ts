import express, { Request, Response, NextFunction } from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import 'express-async-errors'
import path from 'node:path'
import { router } from './app/router'
import { AppError } from './app/errors/AppError'

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    dotenv.config()
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(express.json())
    app.use(router)

    app.listen(3001, () => {
      console.log('Server is runing on http://localhost:3001 🚀')
      console.log('Success to connect to mongo db!')
    })
    app.use((error: AppError, request: Request, response: Response, next: NextFunction) => {
      response.status(error.getStatus())
      response.json({ error: error.getMessage() })
    })
  })
  .catch(() => console.log('Erro ao conectar no mongo'))
