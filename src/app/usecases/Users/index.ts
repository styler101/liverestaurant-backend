import { Account, AccountModel } from './models/Account'

export interface Controller {
  createAccount: (payload: Account) => Promise<AccountModel>
}
