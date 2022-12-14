import express from 'express'
import mongoose from 'mongoose'
import path from 'node:path'
import { router } from './app/router'

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    app.use(express.json())
    app.use(router)

    app.listen(3001, () => {
      console.log('Server is runing on http://localhost:3001 🚀')
      console.log('Success to connect to mongo db!')
    })
  })
  .catch(() => console.log('Erro ao conectar no mongo'))
