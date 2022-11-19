import { Request, Response } from 'express'
import CreatePeopleService from '../../services/Peoples/CreatePeople'
import ListPeopleServices from '../../services/Peoples/ListPeoples'

class PeopleController {
  async index (request: Request, response: Response) {
    try {
      const peoplesList = new ListPeopleServices()
      const peoples = await peoplesList.handler()
      return response.status(200).json(peoples)
    } catch (error: any) {
      return response.status(400).json({ message: error.message || 'Invalid Request' })
    }
  }

  async store (request: Request, response: Response) {
    try {
      const avatar = request.file?.filename
      const { status, name, lastName, phone, email, address, birthDate, city, gender, uf, zipCode } = request.body
      const peopleService = new CreatePeopleService()
      const people = await peopleService.handler({
        status,
        name,
        lastName,
        phone,
        email,
        address,
        birthDate,
        city,
        gender,
        uf,
        zipCode,
        avatar
      })
      console.log(people)
      return response.status(201).json({ success: true, people })
    } catch (error) {
      console.log(error)
      // @ts-expect-error
      return response.status(400).json({ success: false, message: error.message })
    }
  }
}

export default new PeopleController()
