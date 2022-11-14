import express from 'express'
import mongoose from 'mongoose'

mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    app.listen(3001, () => {
      console.log('Server is runing on http://localhost:3001 🚀')
      console.log('Success to connect to mongo db!')
    })
  })
  .catch(() => console.log('Erro ao conectar no mongo'))
