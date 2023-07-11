import { Item, NullableItem } from "./types";

export interface IFlexiSwap {
  createTrade(givings: Item[], receivings: NullableItem[][]): Promise<void>;
  acceptOffer(
    tradeId: bigint,
    receivingId: bigint,
    receivings: Item[],
    additionalItems: Item[]
  ): Promise<void>;
  createCounterOffer(tradeId: bigint, items: Item[]): Promise<void>;
  acceptCounterOffer(tradeId: bigint, counterOfferId: bigint): Promise<void>;
}
