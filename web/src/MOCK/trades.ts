import { INft, ITrade, IUser } from "../interfaces";
import img from "./assets/img.png";

export const user: IUser = {
  name: "Caroline",
  lastName: "Boundles",
  address: "0x3758327597175138957053",
};

export const offer: INft[] = [
  {
    id: 1,
    name: "Nft 1",
    collection: "Ape NFT",
    img,
    address: "0x0000000000000002",
  },
  {
    id: 2,
    name: "Nft 2",
    collection: "collection",
    img,
  },
  {
    id: 3,
    name: "Nft 3",
    collection: "collection",
    img,
  },
  {
    id: 4,
    name: "Nft 4",
    collection: "collection",
    img,
  },
  {
    id: 5,
    name: "Nft 5",
    collection: "collection",
    img,
  },
];

export const counterOffer: INft[] = [
  {
    id: 11,
    name: "Nft 6",
    collection: "collection",
    img,
  },
  {
    id: 12,
    name: "Nft 7",
    collection: "collection",
    img,
  },
  {
    id: 13,
    name: "Nft 7",
    collection: "collection",
    img,
  },
  {
    id: 14,
    name: "Nft 7",
    collection: "collection",
    img,
  },
  {
    id: 15,
    name: "Nft 7",
    collection: "collection",
    img,
  },
];

export const trades: ITrade[] = [
  {
    id: 1,
    offer,
    counterOffer,
    date: new Date(),
    user,
  },
];
