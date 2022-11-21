import { People, PeopleModel } from './model'

export interface Controller {
  handler: (people: People) => Promise<PeopleModel>
}

interface SortData {
  sort: string
  direction: 'asc' | 'desc'
}
interface QueryData {
  query: string
  q: string
}
export interface ListPeoplesUseCases {
  handler: (sort?: SortData | undefined, query?: QueryData | undefined) => Promise<PeopleModel[]>
}
