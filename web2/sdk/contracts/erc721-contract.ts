import { write } from "./../utils";
import { prepareWriteContract, readContract } from "@wagmi/core";
import { IERC721_ABI } from "../constants";

export class ERC721Contract {
  private readonly _contractInfo: {
    address: Address;
    abi: typeof IERC721_ABI;
  };

  constructor(address: Address) {
    this._contractInfo = {
      address,
      abi: IERC721_ABI,
    } as const;
  }

  async approve(flexiSwapAddress: Address, tokenId: bigint): Promise<void> {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "approve",
      args: [flexiSwapAddress, tokenId],
    });

    await write(request);
  }

  async getApproved(tokenId: bigint): Promise<Address> {
    return readContract({
      ...this._contractInfo,
      functionName: "getApproved",
      args: [tokenId],
    });
  }
}
