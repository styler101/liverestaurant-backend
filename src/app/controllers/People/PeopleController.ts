import { Request, Response } from 'express'
import CreatePeopleService from '../../services/Peoples/CreatePeople'
import ListPeopleServices from '../../services/Peoples/ListPeoples'
// import PeoplesMapper from '../../mappers/peoples'
class PeopleController {
  async index (request: Request, response: Response) {
    try {
      const { sort, direction } = request.query as any
      console.log(sort, direction)
      const peoplesList = new ListPeopleServices()
      const peoples = await peoplesList.handler({ sort, direction })
      return response.status(200).json(peoples)
    } catch (error: any) {
      return response.status(400).json({ message: error })
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
      return response.status(201).json({ success: true, people })
    } catch (error: any) {
      return response.status(error.getStatus()).json({ success: false, message: error.getMessage() })
    }
  }
}

export default new PeopleController()
