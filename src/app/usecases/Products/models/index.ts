import { MongooseTypeId } from '../../../types/interfaces'

export interface IngredientsModel {
  icon: string
  name: string
}
export interface ProductModel {
  _id: MongooseTypeId
  name: string
  description: string
  imagePath: string
  price: number
  category: MongooseTypeId
  ingredients: IngredientsModel[]

}
