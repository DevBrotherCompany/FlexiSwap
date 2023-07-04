import { write } from "./../utils";
import { prepareWriteContract } from "@wagmi/core";
import { FLEXISWAP_ABI } from "../constants";
import { ItemInfo } from "../types";

export class FlexiSwapContract {
  private readonly _contractInfo: {
    address: Address;
    abi: typeof FLEXISWAP_ABI;
  };

  constructor(address: Address) {
    this._contractInfo = { address, abi: FLEXISWAP_ABI };
  }

  async createTrade(
    givings: ItemInfo[],
    recievings: ItemInfo[][]
  ): Promise<void> {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "createTrade",
      args: [givings, recievings],
    });

    await write(request);
  }

  async acceptOffer(
    tradeId: bigint,
    receivingId: bigint,
    additionalItems: ItemInfo[]
  ): Promise<void> {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "acceptOffer",
      args: [tradeId, receivingId, additionalItems],
    });

    await write(request);
  }

  async createCounterOffer(
    tradeId: bigint,
    contractItems: ItemInfo[]
  ): Promise<void> {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "createCounterOffer",
      args: [tradeId, contractItems],
    });

    await write(request);
  }

  async acceptCounterOffer(
    tradeId: bigint,
    counterOfferId: bigint
  ): Promise<void> {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "acceptCounterOffer",
      args: [tradeId, counterOfferId],
    });

    await write(request);
  }
}
