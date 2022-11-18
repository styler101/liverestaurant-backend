import { Controller } from '../../usecases/Peoples'
import { People } from '../../usecases/Peoples/model'
import { People as Repository } from '../../models/People'
import { isValidEmail } from '../../utils/validators'

class CreatePeopleService implements Controller {
  async handler (people: People): Promise<any> {
    const { name, lastName, phone, email, address, birthDate, city, gender, uf, user_id, zipCode, avatar } = people
    const requiredFields = { name, email, birthDate, city, gender, uf, user_id, zipCode, address }
    for (const item in requiredFields) {
      // @ts-expect-error
      if (!requiredFields[item]) {
        throw new Error(`The field ${item} is required!`)
      }
    }
    if (!isValidEmail(email)) throw new Error('Invalid Email')
    await Repository.create({
      name,
      lastName,
      phone,
      email,
      address,
      avatar,
      birthDate,
      city,
      gender,
      uf,
      user_id,
      zipCode
    })
  }
}

export default CreatePeopleService
