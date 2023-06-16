import { INftCollection, INftItem, ITrade } from "../interfaces";
import { getRandomNFTItems, mocked_receiving_items } from "./items";

export const mocked_allTrades: ITrade[] = [
  {
    id: "1",
    initiatorAddress: "0x2af216bfd0dcce070036ab16d637cf8f2a526dc0",
    givings: {
      items: getRandomNFTItems(5).map((i) => ({
        item: i,
      })),
    },
    createdAt: 2,
    receivings: [
      {
        id: "1",
        items: mocked_receiving_items,
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
