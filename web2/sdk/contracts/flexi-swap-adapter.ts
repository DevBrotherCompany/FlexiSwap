import { FLEXISWAP_ABI } from "../constants";
import { ItemInfo } from "../types";
import { write } from "../utils";

export class FlexiSwapAdapter {
  private readonly contractInfo: {
    address: Address;
    abi: typeof FLEXISWAP_ABI;
  };

  constructor(address: Address) {
    this.contractInfo = { address, abi: FLEXISWAP_ABI };
  }

  async createTrade(
    givings: ItemInfo[],
    recievings: ItemInfo[][]
  ): Promise<void> {
    await write({
      ...this.contractInfo,
      functionName: "createTrade",
      args: [givings, recievings],
    });
  }

  async acceptOffer(
    tradeId: bigint,
    receivingId: bigint,
    additionalItems: ItemInfo[]
  ): Promise<void> {
    await write({
      ...this.contractInfo,
      functionName: "acceptOffer",
      args: [tradeId, receivingId, additionalItems],
    });
  }

  async createCounterOffer(
    tradeId: bigint,
    contractItems: ItemInfo[]
  ): Promise<void> {
    await write({
      ...this.contractInfo,
      functionName: "createCounterOffer",
      args: [tradeId, contractItems],
    });
  }

  async acceptCounterOffer(
    tradeId: bigint,
    counterOfferId: bigint
  ): Promise<void> {
    await write({
      ...this.contractInfo,
      functionName: "acceptCounterOffer",
      args: [tradeId, counterOfferId],
    });
  }
}
