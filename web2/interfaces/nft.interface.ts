export interface IItemCollection {
  name: string | null;
  tokenAddress: string;
}

export interface INftItem {
  tokenId: bigint;
  tokenAddress: Address;
  name: string | null;
  description: string | null;
  file: string | null;
}

export interface INullableItem extends Omit<INftItem, "tokenId"> {
  tokenId: bigint | null;
}

export interface IPreviewItem {
  file: string | null;
}

export interface INftCollection {
  tokenAddress: Address;
  name: string | null;
  symbol: string | null;
  logo: string | null;
  previewItems: INftItem[] | null;
}
