import { MongooseTypeId } from '../../types/interfaces'

interface IngredientsType {
  icon: string
  name: string
}

export interface CreateProduct {
  name: string
  description: string
  price: number
  category: MongooseTypeId
  imagePath: string
  ingredients: IngredientsType[]
}

/*
import { Request, Response } from 'express'
import { Product } from '../../models/Product'
export async function creatProduct (request: Request, response: Response) {
  try {
    const imagePath = request.file?.filename

    const { name, description, price, category, ingredients } = request.body

    const product = await Product.create({
      name,
      description,
      price: Number(price),
      category,
      ingredients: ingredients ? JSON.parse(ingredients) : [],
      imagePath
    })
    delete product.__v
    return response.status(201).json({ success: true, product })
  } catch (error: any) {
    return response.status(400).json({ success: false, message: error.message })
  }
}

*/
