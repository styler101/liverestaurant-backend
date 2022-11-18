import { Account, AccountModel } from './models/Account'

export interface CreateAccount {
  createAccount: (payload: Account) => Promise<AccountModel>
}
