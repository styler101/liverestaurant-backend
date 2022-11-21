import { Request, Response } from 'express'
import exceljs from 'exceljs'
import CreatePeopleService from '../../services/Peoples/CreatePeople'
import ListPeopleServices from '../../services/Peoples/ListPeoples'
import { People } from '../../models/People'

// import PeoplesMapper from '../../mappers/peoples'
class PeopleController {
  async index (request: Request, response: Response) {
    try {
      const { sort, direction, q } = request.query as any
      const peoplesList = new ListPeopleServices()
      const peoples = await peoplesList.handler({ sort, direction }, { query: q })
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

  async extract (request: Request, response: Response) {
    try {
      // const { sort, direction } = request.query as any
      // const [year, mouth, day] = date
      const workbook = new exceljs.Workbook()
      const sheet = workbook.addWorksheet('Worksheet')

      sheet.columns = [
        { header: 'id', key: 'name' },
        { header: 'status', key: 'status' },
        { header: 'name', key: 'name' },
        { header: 'lastName', key: 'lastName' },
        { header: 'email', key: 'email' },
        { header: 'phone', key: 'phone' },
        { header: 'avatar', key: 'avatar' },
        { header: 'gender', key: 'gender' },
        { header: 'birthDate', key: 'birthDate' },
        { header: 'address', key: 'address' },
        { header: 'zipCode', key: 'zipCode' },
        { header: 'city', key: 'city' },
        { header: 'uf', key: 'uf' }
      ]

      const users = await People.find()
      for (let i = 0; i < users.length; i++) {
        sheet.addRow({
          status: users[i].status,
          name: users[i].name,
          lastName: users[i].lastName,
          email: users[i].email,
          phone: users[i].phone,
          avatar: users[i].avatar,
          gender: users[i].gender,
          brithDate: users[i].birthDate,
          address: users[i].address,
          zipCode: users[i].zipCode,
          city: users[i].city,
          uf: users[i].uf
        })
      }
      sheet.getRow(1).font = {
        bold: true,
        color: { argb: '#000' }
      }

      sheet.getRow(1).fill = {
        type: 'pattern',
        pattern: 'solid',
        bgColor: { argb: '#ff000000' }
      }

      await workbook.xlsx.writeFile('./teste.xlsx').then(() => {
        return response.send({
          status: 200,
          message: { success: true },
          path: '/teste.xlsx'
        })
      })
    } catch (error: any) {
      console.log(error)
      return response.status(500).json({ message: error.message })
    }
  }
}

export default new PeopleController()
