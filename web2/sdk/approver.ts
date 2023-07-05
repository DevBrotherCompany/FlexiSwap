import { multicall } from "@wagmi/core";
import { IERC721_ABI } from "./constants";
import { ERC721Adapter } from "./contracts/erc721-adapter";
import { Item } from "./types";

export class Approver {
  constructor(private readonly flexiSwapAddress: Address) {}

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
      const erc721Adapter = new ERC721Adapter(tokenAddress);
      await erc721Adapter.approve(this.flexiSwapAddress, tokenId);
    }
  }
}
