import { readContract } from "@wagmi/core";
import { IERC721_ABI } from "../constants";
import { write } from "../utils";

export class ERC721Adapter {
  private readonly contractInfo: {
    address: Address;
    abi: typeof IERC721_ABI;
  };

  constructor(address: Address) {
    this.contractInfo = {
      address,
      abi: IERC721_ABI,
    };
  }

  async approve(flexiSwapAddress: Address, tokenId: bigint): Promise<void> {
    await write({
      ...this.contractInfo,
      functionName: "approve",
      args: [flexiSwapAddress, tokenId],
    });
  }

  async getApproved(tokenId: bigint): Promise<Address> {
    return readContract({
      ...this.contractInfo,
      functionName: "getApproved",
      args: [tokenId],
    });
  }
}
