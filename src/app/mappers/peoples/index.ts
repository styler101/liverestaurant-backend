import { DomainData, PersistedData } from './interfaces'
import { notEmptyStringOrDefault, numberOrDefault } from '../../utils/validators'

class PeopleMapper {
  toDomain (data: PersistedData[]): DomainData[] {
    return data.map((item) => {
      const parsedItem: DomainData = {
        id: notEmptyStringOrDefault(item._id),
        status: numberOrDefault(item.status),
        name: notEmptyStringOrDefault(item.name),
        lastName: notEmptyStringOrDefault(item.lastName),
        email: notEmptyStringOrDefault(item.email),
        phone: notEmptyStringOrDefault(item.phone),
        avatar: notEmptyStringOrDefault(item.avatar),
        gender: notEmptyStringOrDefault(item.gender),
        birthDate: notEmptyStringOrDefault(item.birthDate),
        address: notEmptyStringOrDefault(item.address),
        zipCode: notEmptyStringOrDefault(item.zipCode),
        city: notEmptyStringOrDefault(item.city),
        uf: notEmptyStringOrDefault(item.uf)
      }
      return parsedItem
    })
  }
}

export default new PeopleMapper()
