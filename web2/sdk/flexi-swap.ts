import { Approver } from "./approver";
import { FlexiSwapContract } from "./contracts/flexi-swap-contract";
import { Item, ItemInfo, NullableItem } from "./types";

export class FlexiSwap {
  private readonly flexiSwapContract: FlexiSwapContract;
  private readonly approver: Approver;

  constructor(flexiSwapContract: FlexiSwapContract, approver: Approver) {
    this.flexiSwapContract = flexiSwapContract;
    this.approver = approver;
  }

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
    await this.flexiSwapContract.createTrade(
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
    await this.flexiSwapContract.acceptOffer(
      tradeId,
      receivingId,
      contractAdditionalItems
    );
  }

  async createCounterOffer(tradeId: bigint, items: Item[]): Promise<void> {
    this.approver.approve(items);

    const contractItems = items.map(this.mapItem);
    await this.flexiSwapContract.createCounterOffer(tradeId, contractItems);
  }

  async acceptCounterOffer(
    tradeId: bigint,
    counterOfferId: bigint
  ): Promise<void> {
    await this.flexiSwapContract.acceptCounterOffer(tradeId, counterOfferId);
  }
}
