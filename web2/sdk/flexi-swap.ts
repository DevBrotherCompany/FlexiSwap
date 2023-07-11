import { IFlexiSwap } from "./IFlexiSwap";
import { Approver } from "./approver";
import { FlexiSwapAdapter } from "./contracts/flexi-swap-adapter";
import { Item, ItemInfo, NullableItem } from "./types";

export class FlexiSwap implements IFlexiSwap {
  constructor(
    private readonly flexiSwapAdapter: FlexiSwapAdapter,
    private readonly approver: Approver
  ) {}

  private mapItem(item: Item | NullableItem): ItemInfo {
    return {
      nftAddress: item.tokenAddress as Address,
      tokenId: item.tokenId ?? BigInt(0),
      isEmptyToken: item.tokenId === null,
    };
  }

  async createTrade(
    givings: Item[],
    receivings: NullableItem[][]
  ): Promise<void> {
    await this.approver.approve(givings);

    const contractGivings = givings.map(this.mapItem);
    const contractReceivings = receivings.map((items) =>
      items.map(this.mapItem)
    );
    await this.flexiSwapAdapter.createTrade(
      contractGivings,
      contractReceivings
    );
  }

  async acceptOffer(
    tradeId: bigint,
    receivingId: bigint,
    receivings: Item[],
    additionalItems: Item[]
  ): Promise<void> {
    await this.approver.approve([...receivings, ...additionalItems]);

    const contractAdditionalItems = additionalItems.map(this.mapItem);
    await this.flexiSwapAdapter.acceptOffer(
      tradeId,
      receivingId,
      contractAdditionalItems
    );
  }

  async createCounterOffer(tradeId: bigint, items: Item[]): Promise<void> {
    await this.approver.approve(items);

    const contractItems = items.map(this.mapItem);
    await this.flexiSwapAdapter.createCounterOffer(tradeId, contractItems);
  }

  async acceptCounterOffer(
    tradeId: bigint,
    counterOfferId: bigint
  ): Promise<void> {
    await this.flexiSwapAdapter.acceptCounterOffer(tradeId, counterOfferId);
  }
}
