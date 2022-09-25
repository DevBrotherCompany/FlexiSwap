import { INftCollection, INftItem, ITrade } from "../interfaces";
import { mocked_PreviewItems } from "./previewItems";

export const mocked_allTrades: ITrade[] = [
  {
    id: "1",
    initiatorAddress: "0xy33785683715221512521521",
    givings: {
      items: [
        {
          tokenId: "token 1",
          tokenAddress: "token adress 1",
          name: "NFT name 1",
          file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
          collection: { tokenAddress: "0x388517389791511251", name: "coll 1" },
          description: "descr 1",
        },
        {
          tokenId: "token 2",
          tokenAddress: "token adress 1",
          name: "NFT name 1",
          file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
          collection: { tokenAddress: "0x388517389791511251", name: "coll 1" },
          description: "descr 1",
        },
        {
          tokenId: "token 3",
          tokenAddress: "token adress 1",
          name: "NFT name 1",
          file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
          collection: { tokenAddress: "0x388517389791511251", name: "coll 1" },
          description: "descr 1",
        },
        {
          tokenId: "token 4",
          tokenAddress: "token adress 1",
          name: "NFT name 1",
          file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
          collection: { tokenAddress: "0x388517389791511251", name: "coll 1" },
          description: "descr 1",
        },
        {
          tokenId: "token 5",
          tokenAddress: "token adress 1",
          name: "NFT name 1",
          file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
          collection: { tokenAddress: "0x388517389791511251", name: "coll 1" },
          description: "descr 1",
        },
        {
          tokenId: "token 6",
          tokenAddress: "token adress 1",
          name: "NFT name 1",
          file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
          collection: { tokenAddress: "0x388517389791511251", name: "coll 1" },
          description: "descr 1",
        },
      ],
    },
    createdAt: 1124,
    receivings: [
      {
        id: "1",
        items: [
          {
            collection: {
              previewItems: mocked_PreviewItems,
              tokenAddress: "0x2174214",
              name: "Steam punks",
              logo: "https://thumb.tildacdn.com/tild3639-6230-4362-b964-666231373539/-/resize/824x/-/format/webp/image1.png",
              symbol: null,
            },
            item: null,
            // item: {
            //   tokenId: "124",
            //   name: "Item 1",
            //   tokenAddress: "0x21789175892175982152",
            //   file: "https://gagadget.com/media/cache/80/20/80206948c99d63a185fd522dc1c669b0.jpg",
            //   collection: {
            //     name: "Coll name",
            //     tokenAddress: "0x12521516112612",
            //   },
            //   description: "2154218wiohfioqew",
            // },
          },
        ],
      },
    ],
  },
];

const mocked_NFT: INftItem = {
  tokenId: "112",
  collection: { name: "col name", tokenAddress: "token address 1" },
  name: "NFT name",
  file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
  tokenAddress: "token address",
  description: "descruption",
};

const mocked_NFT_collection: INftCollection = {
  name: "NFT collection",
  tokenAddress: "token address",
  logo: "https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg",
  previewItems: [
    {
      file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
    },
    {
      file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
    },
  ],
  symbol: "symbol ?",
};

export const mocked_allNfts: INftItem[] = [
  {
    tokenId: "1",
    tokenAddress: "0x2142151521",
    name: "Name 1",
    file: "https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg",
    collection: null,
    description: null,
  },
  {
    tokenId: "2",
    tokenAddress: "0x2142151521",
    name: "Name 1",
    file: "https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg",
    collection: null,
    description: null,
  },
  {
    tokenId: "3",
    tokenAddress: "0x2142151521",
    name: "Name 1",
    file: "https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg",
    collection: null,
    description: null,
  },
  {
    tokenId: "4",
    tokenAddress: "0x2142151521",
    name: "Name 1",
    file: "https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg",
    collection: null,
    description: null,
  },
  {
    tokenId: "5",
    tokenAddress: "0x2142151521",
    name: "Name 1",
    file: "https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg",
    collection: null,
    description: null,
  },
  {
    tokenId: "6",
    tokenAddress: "0x2142151521",
    name: "Name 1",
    file: "https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg",
    collection: null,
    description: null,
  },
  {
    tokenId: "7",
    tokenAddress: "0x2142151521",
    name: "Name 1",
    file: "https://www.iphones.ru/wp-content/uploads/2022/08/178b9b81c4.jpg",
    collection: null,
    description: null,
  },
];
