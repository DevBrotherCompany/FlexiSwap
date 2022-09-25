export interface IStorage<T = any> {
  save: (key: string, item: T) => void;
  get: (key: string) => T | null;
}
