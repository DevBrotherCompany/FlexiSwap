import { ID } from "./trade.interface";

export interface INft {
  id: ID;
  name: string;
  collection: ID;
  img?: string;
  address?: string;
}

export interface IOffer {
  number: number;
  selected: INft[];
}
