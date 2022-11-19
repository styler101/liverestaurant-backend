import { ListPeoplesUseCases } from '../../usecases/Peoples'
import { People } from '../../models/People'
import { PeopleModel } from '../../usecases/Peoples/model'

interface SortData {
  sort: string
  direction: 'asc' | 'desc'
}
class ListPeoplesService implements ListPeoplesUseCases {
  async handler ({ sort, direction }: SortData): Promise<PeopleModel[]> {
    const peoples = await People.find({}).sort({ [sort]: direction })
    console.log(peoples)
    return peoples
  }
}

export default ListPeoplesService
