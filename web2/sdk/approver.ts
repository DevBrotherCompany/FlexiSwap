import { multicall } from "@wagmi/core";
import { FLEXISWAP_ADDRESS, IERC721_ABI } from "./constants";
import { Item } from "./types";
import { ERC721Contract } from "./contracts/erc721-contract";
export class Approver {
  private prepareGetApproved = ({ tokenAddress, tokenId }: Item) => {
    return {
      abi: IERC721_ABI,
      address: tokenAddress,
      functionName: "getApproved",
      args: [tokenId],
    } as const;
  };

  private createERC721 = (erc721Address: Address): ERC721Contract => {
    return new ERC721Contract(erc721Address);
  };

  getUnapproved = async (items: Item[]): Promise<Item[]> => {
    const results = await multicall({
      contracts: items.map(this.prepareGetApproved),
    });

    return items.filter(
      (item, idx) => results[idx].result !== FLEXISWAP_ADDRESS
    );
  };

  approve = async (items: Item[]): Promise<void> => {
    const unapproved = await this.getUnapproved(items);
    Promise.all(
      unapproved.map(({ tokenAddress, tokenId }) => {
        const erc721Contract = this.createERC721(tokenAddress);
        return erc721Contract.approve(FLEXISWAP_ADDRESS, tokenId);
      })
    );
  };
}
