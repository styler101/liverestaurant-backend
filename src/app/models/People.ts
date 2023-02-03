import { model, Schema } from 'mongoose'

const PeopleSchema = new Schema({

  status: {
    type: Number,
    default: 1
  },

  name: {
    type: String,
    required: true
  },

  lastName: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  phone: {
    type: String,
    required: true
  },

  avatar: {
    type: String,
    default: null
  },

  gender: {
    type: String,
    enum: ['M', 'F', 'O'],
    required: true
  },

  birthDate: {
    type: String,
    required: true
  },

  address: {
    type: String,
    required: true
  },

  zipCode: {
    type: String,
    required: true
  },

  city: {
    type: String,
    required: true
  },

  uf: {
    type: String,
    required: true
  }

})

export const People = model('People', PeopleSchema)
