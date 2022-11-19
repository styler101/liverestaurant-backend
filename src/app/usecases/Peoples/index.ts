import { People, PeopleModel } from './model'

export interface Controller {
  handler: (people: People) => Promise<PeopleModel>
}

export interface ListPeoplesUseCases {
  handler: () => Promise<PeopleModel[]>
}
