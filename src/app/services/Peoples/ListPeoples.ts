import { ListPeoplesUseCases } from '../../usecases/Peoples'
import { People } from '../../models/People'
import { PeopleModel } from '../../usecases/Peoples/model'

interface SortData {
  sort: string
  direction: 'asc' | 'desc'
}
interface QueryData {
  query: string

}
class ListPeoplesService implements ListPeoplesUseCases {
  // @ts-expect-error
  async handler ({ sort, direction }: SortData, { query }: QueryData): Promise<PeopleModel[]> {
    let peoples
    if (sort) {
      peoples = await People.find(query ? { name: { $regex: '.*' + query + '.*' } } : {}).sort(sort ? { [sort]: direction } : {})
      return peoples
    }
    peoples = await People.find()

    return peoples
  }
}

export default ListPeoplesService
