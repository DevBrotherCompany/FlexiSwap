import { multicall } from "@wagmi/core";
import { IERC721_ABI } from "./constants";
import { ERC721Contract } from "./contracts/erc721-contract";
import { Item } from "./types";

export class Approver {
  private readonly flexiSwapAddress: Address;

  constructor(flexiSwapAddress: Address) {
    this.flexiSwapAddress = flexiSwapAddress;
  }

  async getUnapproved(items: Item[]): Promise<Item[]> {
    const results = await multicall({
      contracts: items.map(({ tokenId, tokenAddress }) => ({
        abi: IERC721_ABI,
        address: tokenAddress,
        functionName: "getApproved",
        args: [tokenId],
      })),
    });

    return items.filter(
      (item, idx) => results[idx].result !== this.flexiSwapAddress
    );
  }

  async approve(items: Item[]): Promise<void> {
    const unapproved = await this.getUnapproved(items);
    
    for (const { tokenAddress, tokenId } of unapproved) {
      const erc721Contract = new ERC721Contract(tokenAddress);
      await erc721Contract.approve(this.flexiSwapAddress, tokenId);
    }
  }
}
