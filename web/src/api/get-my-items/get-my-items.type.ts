import { Maybe } from "interfaces/maybe.type";

export interface IGetMyItems {
  items: IItem[];
  nextPage: Maybe<number>;
}

interface IPreviewItem {
  file: Maybe<string>;
}

interface ICollection {
  tokenAddress: string;
  name: Maybe<string>;
  symbol: Maybe<string>;
  logo: Maybe<string>;
  previewItems: IPreviewItem[];
}

interface IItem {
  tokenAddress: string;
  tokenId: string;
  name: Maybe<string>;
  description: Maybe<string>;
  file: Maybe<string>;
  collection: Maybe<ICollection>;
}
