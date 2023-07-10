import { ICounterOfferItem, INftItem, IReceivingsItem } from "@/interfaces";

export const mocked_items: INftItem[] = [
  {
    tokenId: BigInt(1),
    tokenAddress: "0x1",
    name: "Anime Cute Girl #340 (ACG)",
    file: "https://arweave.net/4H0HLh9rQvI-vv16xFaPcIq0wcMkqZ04YaKonU7DOig?ext=png",
    description: "descr 1",
  },
  {
    tokenId: BigInt(2),
    tokenAddress: "0x2",
    name: "NFT name 1",
    file: "https://arweave.net/4H0HLh9rQvI-vv16xFaPcIq0wcMkqZ04YaKonU7DOig?ext=png",
    description: "descr 1",
  },
  {
    tokenId: BigInt(3),
    tokenAddress: "0x3",
    name: "#1985",
    file: "https://i.seadn.io/gae/kIVV78ACUC1R9i4mJ-LBpqYzwgdPHBEkqr02p4Od8qSgNJ6A7XLAW5oItaU8TnpkpNg_hEkpdnF2fSWUOT1hQRydAoZ-9ZNu5Gwhm40?auto=format&w=1000",
    description: "descr 1",
  },
  {
    tokenId: BigInt(4),
    tokenAddress: "0x4",
    name: "NFT name 1",
    file: "https://i.seadn.io/gae/kIVV78ACUC1R9i4mJ-LBpqYzwgdPHBEkqr02p4Od8qSgNJ6A7XLAW5oItaU8TnpkpNg_hEkpdnF2fSWUOT1hQRydAoZ-9ZNu5Gwhm40?auto=format&w=1000",
    description: "descr 1",
  },
  {
    tokenId: BigInt(5),
    tokenAddress: "0x5",
    name: "NFT name 1",
    file: "https://i.seadn.io/gae/BIQB1wV1ZrvkSodhoR5dX0L2bmomsjomO0z29LSW8KIFv1GK-I1iSfyo207POpObkdgMZYHygxyYz9ZGGgzDGH6auGgpDVe1tzZdpw?auto=format&w=384",
    description: "descr 1",
  },
  {
    tokenId: BigInt(6),
    tokenAddress: "0x6",
    name: "Warrior 1255",
    file: "https://i.seadn.io/gae/zYU4YnSDqgKiiCUoEjoA2EZYZ7bW2YPGFmQhAgRheC88bNUZNUKpiSaHz9zL1XBieaf8KArvgG8lYJ6ebHSkHqf2eVDA_WU0D10ld28?auto=format&w=1000",
    description: "descr 1",
  },
  {
    tokenId: BigInt(7),
    tokenAddress: "0x7",
    name: "Crypto Bull #126",
    file: "https://i.seadn.io/gae/-Wro5pePZwxihbr7w_SahtZ-sj4-Qdgpr_TH2tvmbUDLTQZi-ZlqnBeer9859ziteeg7uUR-FDk75-zHl36gzuSMxclyTAq5J6iHXms?auto=format&w=1000",
    description: "descr 1",
  },
  {
    tokenId: BigInt(8),
    tokenAddress: "0x8",
    name: "NFT name 1",
    file: "https://i.seadn.io/gae/BIQB1wV1ZrvkSodhoR5dX0L2bmomsjomO0z29LSW8KIFv1GK-I1iSfyo207POpObkdgMZYHygxyYz9ZGGgzDGH6auGgpDVe1tzZdpw?auto=format&w=384",
    description: "descr 1",
  },
  {
    tokenId: BigInt(9),
    tokenAddress: "0x9",
    name: "NFT name 1",
    file: "https://i.seadn.io/gae/BIQB1wV1ZrvkSodhoR5dX0L2bmomsjomO0z29LSW8KIFv1GK-I1iSfyo207POpObkdgMZYHygxyYz9ZGGgzDGH6auGgpDVe1tzZdpw?auto=format&w=384",
    description: "descr 1",
  },
  {
    tokenId: BigInt(10),
    tokenAddress: "0x10",
    name: "LMG GT No.1",
    file: "https://i.seadn.io/gae/G_rS0h7tc9LDu1i37IvK7F8gfLOQw9x4AwwA2nigUluS091s3Ni13V99cT6L6szWFX7E6_DOaL7cvfHkee0e4oHLPfAMBtpqBTVnpw?auto=format&w=1920",
    description: "descr 1",
  },
  {
    tokenId: BigInt(11),
    tokenAddress: "0x11",
    name: "NFT name 1",
    file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
    description: "descr 1",
  },
];

export const getRandomNFTItem = (arr?: INftItem[]) => {
  if (arr) {
    let rand = Math.floor(Math.random() * mocked_items.length);
    const elem = mocked_items[rand];
    while (arr.some((el) => el.tokenId === elem.tokenId)) {
      rand = Math.floor(Math.random() * mocked_items.length);
    }
    return mocked_items[rand];
  }
  const rand = Math.floor(Math.random() * mocked_items.length);
  return mocked_items[rand];
};

export const mocked_receiving_items: IReceivingsItem[] = [
  {
    item: getRandomNFTItem(),
  },
  {
    item: getRandomNFTItem(),
  },
  {
    item: getRandomNFTItem(),
  },
  {
    item: getRandomNFTItem(),
  },
  {
    item: getRandomNFTItem(),
  },
] as IReceivingsItem[];

export const mocked_counteroffer_items: ICounterOfferItem[] = [
  {
    item: getRandomNFTItem(),
  },
  {
    item: getRandomNFTItem(),
  },
  {
    item: getRandomNFTItem(),
  },
  {
    item: getRandomNFTItem(),
  },
  {
    item: getRandomNFTItem(),
  },
] as ICounterOfferItem[];

export function getRandomNFTItems(len: number) {
  const used: number[] = [];
  const res: INftItem[] = [];
  let rand: number;
  for (let index = 0; index < len; index++) {
    rand = Math.floor(Math.random() * len);
    if (!used.includes(rand)) {
      used.push(rand);
      res.push(mocked_items[rand]);
    }
  }
  return res;
}
