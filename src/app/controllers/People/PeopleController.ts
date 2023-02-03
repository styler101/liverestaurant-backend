import { Request, Response } from 'express'
import exceljs from 'exceljs'
import CreatePeopleService from '../../services/Peoples/CreatePeople'
import ListPeopleServices from '../../services/Peoples/ListPeoples'
import { People } from '../../models/People'
import { notEmptyStringOrDefault } from '../../utils/validators/index'

// import PeoplesMapper from '../../mappers/peoples'
class PeopleController {
  async index(request: Request, response: Response) {
    try {
      const { sort, direction, q } = request.query as any

      const peoplesList = new ListPeopleServices()
      const peoples = await peoplesList.handler(
        { sort, direction },
        { query: q }
      )

      return response.status(200).json(peoples)
    } catch (error: any) {
      return response.status(400).json({ message: error })
    }
  }

  async store(request: Request, response: Response) {
    try {
      const avatar = request.file?.filename
      const {
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
      } = request.body
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
        avatar,
      })
      return response.status(201).json({ success: true, people })
    } catch (error: any) {
      return response
        .status(error.getStatus())
        .json({ success: false, message: error.getMessage() })
    }
  }

  async extract(request: Request, response: Response) {
    try {
      const workbook = new exceljs.Workbook()
      workbook.title = 'Extração de Dados'

      const sheet = workbook.addWorksheet('sheet', {
        headerFooter: { firstHeader: 'Extração de dados' },
      })

      sheet.pageSetup.printArea = ''
      sheet.columns = [
        {
          header: 'status',
          key: 'status',
          width: 10,
          alignment: { horizontal: 'center', vertical: 'justify' },
        },
        { header: 'name', key: 'name', width: 10 },
        { header: 'lastName', key: 'lastName', width: 10 },
        { header: 'email', key: 'email', width: 10 },
        { header: 'phone', key: 'phone', width: 20 },
        { header: 'avatar', key: 'avatar', width: 10 },
        { header: 'gender', key: 'gender', width: 10 },
        { header: 'birthDate', key: 'birthDate', width: 10 },
        { header: 'address', key: 'address', width: 10 },
        { header: 'zipCode', key: 'zipCode', width: 10 },
        { header: 'city', key: 'city', width: 10 },
        { header: 'uf', key: 'uf', width: 10 },
      ]

      const users = await People.find()
      for (let i = 0; i < users.length; i++) {
        sheet.addRow({
          status: users[i].status === 0 ? 'Inativo' : 'Ativo',
          name: notEmptyStringOrDefault(users[i].name),
          lastName: notEmptyStringOrDefault(users[i].lastName),
          email: notEmptyStringOrDefault(users[i].email),
          phone: notEmptyStringOrDefault(users[i].phone),
          avatar: notEmptyStringOrDefault(users[i].avatar),
          gender: notEmptyStringOrDefault(users[i].gender),
          brithDate: notEmptyStringOrDefault(users[i].birthDate),
          address: notEmptyStringOrDefault(users[i].address),
          zipCode: notEmptyStringOrDefault(users[i].zipCode),
          city: notEmptyStringOrDefault(users[i].city),
          uf: notEmptyStringOrDefault(users[i].uf),
        })
      }

      sheet.getRow(1).font = {
        bold: true,
        color: { argb: '#000' },
      }

      sheet.getRow(1).fill = {
        type: 'pattern',
        pattern: 'solid',
        bgColor: { argb: '#00000' },
      }
      let currentDate = new Date().toISOString()
      await workbook.xlsx.writeFile(`./files/${currentDate}.xlsx`).then(() => {
        return response.send({
          status: 200,
          message: { success: true },
          path: `/files/${currentDate}.xlsx`,
        })
      })
    } catch (error: any) {
      return response.status(500).json({ message: error.message })
    }
  }
}

export default new PeopleController()
