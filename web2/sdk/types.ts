import { INftItem } from "@/interfaces";

export type Item = Pick<INftItem, "tokenAddress" | "tokenId">;

export type NullableItem = Pick<INftItem, "tokenAddress"> & {
  tokenId: bigint | null;
};

export type ItemInfo = Pick<INftItem, "tokenId"> & {
  nftAddress: Address;
  isEmptyToken: boolean;
};
