import { People, PeopleModel } from './model'

export interface Controller {
  handler: (people: People) => Promise<PeopleModel>
}

interface SortData {
  sort: string
  direction: 'asc' | 'desc'
}
export interface ListPeoplesUseCases {
  handler: (sort: SortData) => Promise<PeopleModel[]>
}
