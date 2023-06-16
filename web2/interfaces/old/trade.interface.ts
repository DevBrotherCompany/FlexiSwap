import { IUser } from "./user.interface";
import { INft } from "./nft.interface";

export type ID = number | string;

export interface ITrade {
  id: ID;
  user: IUser;
  date: Date;
  offer: INft[];
  counterOffer: INft[];
}
