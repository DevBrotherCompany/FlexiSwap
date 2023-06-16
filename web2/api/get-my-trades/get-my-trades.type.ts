import { Maybe } from "@/interfaces/maybe.type";

export interface IGetMyTrades {
  id: string;
  initiatorAddress: string;
  createdAt: number;
  givings: IGiving;
  receivings: IReceiving[];
}

interface IItemCollection {
  name: Maybe<string>;
  tokenAddress: string;
}

interface IItem {
  tokenId: string;
  tokenAddress: string;
  name: Maybe<string>;
  description: Maybe<string>;
  file: Maybe<string>;
  collection: Maybe<IItemCollection>;
}

interface IGiving {
  items: IItem[];
}

interface IPreviewItem {
  file: Maybe<string>;
}

interface ICollecion {
  tokenAddress: string;
  name: Maybe<string>;
  symbol: Maybe<string>;
  logo: Maybe<string>;
  previewItems: IPreviewItem[];
}

interface IReceivingsItem {
  item: Maybe<IItem>;
  collection: ICollecion;
}

interface IReceiving {
  id: string;
  items: IReceivingsItem[];
}
