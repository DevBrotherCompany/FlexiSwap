import { Maybe } from "./maybe.type";

export interface IItemCollection {
  name?: Maybe<string>;
  tokenAddress: string;
}

export interface INftItem {
  tokenId: string;
  tokenAddress: string;
  name?: Maybe<string>;
  description?: Maybe<string>;
  file?: Maybe<string>;
  collection?: Maybe<IItemCollection>;
}

export interface IPreviewItem {
  file?: Maybe<string>;
}

export interface INftCollection {
  tokenAddress: string;
  name?: Maybe<string>;
  symbol?: Maybe<string>;
  logo?: Maybe<string>;
  previewItems?: IPreviewItem[] | null;
}
