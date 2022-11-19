import { Controller } from '../../usecases/Peoples'
import { People, PeopleModel } from '../../usecases/Peoples/model'
import { People as Repository } from '../../models/People'
import { isValidEmail } from '../../utils/validators'

class CreatePeopleService implements Controller {
  async handler (people: People): Promise<PeopleModel> {
    const { status, name, lastName, phone, email, address, birthDate, city, gender, uf, zipCode, avatar } = people
    const requiredFields: any = { name, email, birthDate, city, gender, uf, zipCode, address }
    for (const item in requiredFields) {
      if (!requiredFields[item]) {
        throw new Error(`The field ${item} is required!`)
      }
    }
    if (!isValidEmail(email)) throw new Error('Invalid Email')
    const newPeople = await Repository.create({
      status: status || 0,
      name,
      lastName,
      address,
      avatar,
      birthDate,
      city,
      email,
      gender,
      phone,
      uf,
      zipCode
    })

    console.log('New People ', newPeople)
    return newPeople
  }
}

export default CreatePeopleService
