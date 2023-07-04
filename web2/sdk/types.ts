export type Item = {
  tokenAddress: Address;
  tokenId: bigint;
};

export type NullableItem = {
  tokenAddress: Address;
  tokenId: bigint | null;
};

export type ItemInfo = {
  nftAddress: Address;
  tokenId: bigint;
  isEmptyToken: boolean;
};
