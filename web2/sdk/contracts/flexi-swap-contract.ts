import { FLEXISWAP_ABI, FLEXISWAP_ADDRESS } from "../constants";
import { ItemInfo } from "../types";
import { Contract } from "./contract";
import { prepareWriteContract } from "@wagmi/core";

export class FlexiSwapContract extends Contract {
  private readonly _contractInfo = {
    address: FLEXISWAP_ADDRESS,
    abi: FLEXISWAP_ABI,
  } as const;

  get address(): Address {
    return this._contractInfo.address;
  }

  createTrade = async (
    givings: ItemInfo[],
    recievings: ItemInfo[][]
  ): Promise<void> => {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "createTrade",
      args: [givings, recievings],
    });

    await this.write(request);
  };

  acceptOffer = async (
    tradeId: bigint,
    receivingId: bigint,
    additionalItems: ItemInfo[]
  ): Promise<void> => {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "acceptOffer",
      args: [tradeId, receivingId, additionalItems],
    });

    await this.write(request);
  };

  createCounterOffer = async (
    tradeId: bigint,
    contractItems: ItemInfo[]
  ): Promise<void> => {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "createCounterOffer",
      args: [tradeId, contractItems],
    });

    await this.write(request);
  };

  acceptCounterOffer = async (
    tradeId: bigint,
    counterOfferId: bigint
  ): Promise<void> => {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "acceptCounterOffer",
      args: [tradeId, counterOfferId],
    });

    await this.write(request);
  };
}
