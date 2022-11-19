import { ListPeoplesUseCases } from '../../usecases/Peoples'
import { People } from '../../models/People'
import { PeopleModel } from '../../usecases/Peoples/model'

class ListPeoplesService implements ListPeoplesUseCases {
  async handler (): Promise<PeopleModel[]> {
    const peoples = await People.find()
    return peoples
  }
}

export default ListPeoplesService
