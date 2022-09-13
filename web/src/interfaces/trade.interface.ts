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

// export interface ITrade1 {
//   id: ID
//   createdAt: Int!
//   finishedAt: Int
//   initiatorAddress: Bytes!
//   givings: GivingsOffer! @derivedFrom(field: "trade")
//   receivings: [ReceivingsOffer!]! @derivedFrom(field: "trade")
//   counterOffers: [CounterOffer!]! @derivedFrom(field: "trade")
//   acceptedReceivingsOffer: ReceivingsOffer
//   acceptedCounterOffer: CounterOffer
//   counterAgentAddress: Bytes
// }
