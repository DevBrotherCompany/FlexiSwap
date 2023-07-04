import { IERC721_ABI } from "../constants";
import { Contract } from "./contract";
import { prepareWriteContract, readContract } from "@wagmi/core";

export class ERC721Contract extends Contract {
  private readonly _contractInfo: {
    address: Address;
    abi: typeof IERC721_ABI;
  };

  get contractInfo() {
    return this._contractInfo;
  }

  constructor(address: Address) {
    super();
    this._contractInfo = {
      address,
      abi: IERC721_ABI,
    } as const;
  }

  approve = async (
    flexiSwapAddress: Address,
    tokenId: bigint
  ): Promise<void> => {
    const { request } = await prepareWriteContract({
      ...this._contractInfo,
      functionName: "approve",
      args: [flexiSwapAddress, tokenId],
    });

    await this.write(request);
  };

  getApproved = async (tokenId: bigint): Promise<Address> => {
    return readContract({
      ...this._contractInfo,
      functionName: "getApproved",
      args: [tokenId],
    });
  };
}
