import { Localstorage } from "./storage.localstorage";
import { IStorage } from "./storage.interface";

export const storage: IStorage<string> = new Localstorage();
