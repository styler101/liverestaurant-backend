import { model, Schema } from 'mongoose'

const PeopleSchema = new Schema({

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
    type: String
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
  },

  user_id: {
    type: Schema.Types.ObjectId,
    required: true,
    ref: 'user'
  }

})

export const People = model('People', PeopleSchema)
