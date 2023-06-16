import { Localstorage } from './storage.localstorage'
import { IStorage } from './storage.interface'

export const storage: IStorage = new Localstorage()
