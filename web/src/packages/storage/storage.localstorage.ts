import { IStorage } from "./storage.interface";

export class Localstorage implements IStorage<string> {
  save(key: string, item: string) {
    localStorage.setItem(key, JSON.stringify(item));
  }

  get(key: string) {
    const val = localStorage.getItem(key);
    return val ? JSON.parse(val) : null;
  }
}
