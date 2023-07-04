import { INftCollection, INftItem } from "./nft.interface";

export interface ITrade {
  id: bigint;
  initiatorAddress: Address;
  createdAt: number;
  givings: IGivingsOffer;
  receivings: IReceivingsOffer[];
}

export interface IGivingsOffer {
  id: bigint;
  items: IGivingsItem[];
  trade: ITrade;
}

export interface IReceivingsOffer extends Omit<IGivingsOffer, "items"> {
  items: IReceivingsItem[];
}

export interface IGivingsItem {
  collection: INftCollection;
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
