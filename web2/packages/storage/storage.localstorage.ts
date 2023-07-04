import { IStorage } from "./storage.interface";

export class Localstorage implements IStorage<string> {
  save(key: string, item: string) {
    if (typeof window !== "undefined")
      localStorage.setItem(key, JSON.stringify(item));
  }

  get(key: string) {
    if (typeof window !== "undefined") {
      const val = localStorage.getItem(key);
      return val ? JSON.parse(val) : null;
    }

    return null;
  }
}
