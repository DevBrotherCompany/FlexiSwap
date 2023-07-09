import {
  ICounterOffer,
  IGivingsOffer,
  INftItem,
  IReceivingsOffer,
  ITrade
} from "@/interfaces";
import {
  getRandomNFTItems,
  mocked_counteroffer_items,
  mocked_receiving_items,
} from "./items";

export const mocked_allTrades: ITrade[] = [
  {
    id: BigInt(1),
    initiatorAddress: "0x2af216bfd0dcce070036ab16d637cf8f2a526dc0",
    givings: {
      items: getRandomNFTItems(5).map((item) => ({
        item,
      })),
    } as IGivingsOffer,
    createdAt: 2,
    receivings: [
      {
        id: BigInt(1),
        items: mocked_receiving_items,
      } as IReceivingsOffer,
      {
        id: BigInt(2),
        items: mocked_receiving_items,
      } as IReceivingsOffer,
    ],
    counterOffers: [
      {
        id: BigInt(1),
        items: mocked_counteroffer_items,
      } as ICounterOffer,
      {
        id: BigInt(2),
        items: mocked_counteroffer_items,
      } as ICounterOffer,
    ],
    acceptedCounterOffer: null,
    acceptedReceivingOffer: null,
    counterAgentAddress: null,
  },
];

export const mocked_myTrades: ITrade[] = [
  {
    id: BigInt(1),
    initiatorAddress: "0x96EF8327B273A92e99aa86cc04ebF4954e69Fe34",
    givings: {
      items: getRandomNFTItems(8).map((item) => ({
        item,
      })),
    } as IGivingsOffer,
    createdAt: 2,
    receivings: [
      {
        id: BigInt(1),
        items: mocked_receiving_items,
      } as IReceivingsOffer,
      {
        id: BigInt(2),
        items: mocked_receiving_items,
      } as IReceivingsOffer,
    ],
    counterOffers: [
      {
        id: BigInt(1),
        items: mocked_counteroffer_items,
      } as ICounterOffer,
      {
        id: BigInt(2),
        items: mocked_counteroffer_items,
      } as ICounterOffer,
      {
        id: BigInt(3),
        items: mocked_counteroffer_items,
      } as ICounterOffer,
      {
        id: BigInt(4),
        items: mocked_counteroffer_items,
      } as ICounterOffer,
    ],
    acceptedCounterOffer: null,
    acceptedReceivingOffer: null,
    counterAgentAddress: null,
  },
];

const mocked_NFT: INftItem = {
  tokenId: BigInt(1),
  name: "NFT name",
  file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
  tokenAddress: "0x1",
  description: "descruption",
};

// const mocked_NFT_collection: INftCollection = {
//   name: 'NFT collection',
//   tokenAddress: 'token address',
//   logo: 'https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg',
//   previewItems: [
//     {
//       file: 'https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc',
//     },
//     {
//       file: 'https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc',
//     },
//   ],
//   symbol: 'symbol ?',
// }

export const mocked_allNfts: INftItem[] = [
  // {
  //   tokenId: '1',
  //   tokenAddress: '0x2142151521',
  //   name: 'Name 1',
  //   file: 'https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg',
  //   collection: null,
  //   description: null,
  // },
  // {
  //   tokenId: '2',
  //   tokenAddress: '0x2142151521',
  //   name: 'Name 1',
  //   file: 'https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg',
  //   collection: null,
  //   description: null,
  // },
  // {
  //   tokenId: '3',
  //   tokenAddress: '0x2142151521',
  //   name: 'Name 1',
  //   file: 'https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg',
  //   collection: null,
  //   description: null,
  // },
  // {
  //   tokenId: '4',
  //   tokenAddress: '0x2142151521',
  //   name: 'Name 1',
  //   file: 'https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg',
  //   collection: null,
  //   description: null,
  // },
  // {
  //   tokenId: '5',
  //   tokenAddress: '0x2142151521',
  //   name: 'Name 1',
  //   file: 'https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg',
  //   collection: null,
  //   description: null,
  // },
  // {
  //   tokenId: '6',
  //   tokenAddress: '0x2142151521',
  //   name: 'Name 1',
  //   file: 'https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg',
  //   collection: null,
  //   description: null,
  // },
  // {
  //   tokenId: '7',
  //   tokenAddress: '0x2142151521',
  //   name: 'Name 1',
  //   file: 'https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg',
  //   collection: null,
  //   description: null,
  // },
];
