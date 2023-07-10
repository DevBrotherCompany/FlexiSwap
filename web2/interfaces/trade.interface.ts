import { INftItem } from "./nft.interface";

export interface ITrade {
  id: bigint;
  initiatorAddress: Address;
  createdAt: number;
  givings: IGivingsOffer;
  receivings: IReceivingsOffer[];
  counterOffers: ICounterOffer[];
  acceptedReceivingOffer: IReceivingsOffer | null;
  acceptedCounterOffer: ICounterOffer | null;
  counterAgentAddress: Address | null;
}

export interface IGivingsOffer {
  id: bigint;
  items: IGivingsItem[];
  trade: ITrade;
}

export interface IReceivingsOffer extends Omit<IGivingsOffer, "items"> {
  items: IReceivingsItem[];
}

export interface ICounterOffer {
  id: bigint;
  createdAt: number;
  offererAddress: Address;
  items: ICounterOfferItem[];
  trade: ITrade;
}

export interface IGivingsItem {
  id: bigint;
  item: INftItem;
  offer: IGivingsOffer;
  tokenAddress: Address;
  tokenId: bigint;
}

export interface IReceivingsItem
  extends Omit<IGivingsItem, "item" | "tokenId" | "offer"> {
  offer: IReceivingsOffer;
  item: INftItem | null;
  tokenId: bigint | null;
}

export interface ICounterOfferItem extends Omit<IGivingsItem, "offer"> {
  offer: ICounterOffer;
}
