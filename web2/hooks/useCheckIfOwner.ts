import { INftItem } from "@/interfaces";
import { multicall } from "@wagmi/core";
import { useAuth } from "./useAuth";
import { erc721ABI } from "wagmi";

export const useCheckIfOwner = () => {
  const { account } = useAuth();

  return async (items: Pick<INftItem, "tokenAddress" | "tokenId">[]) => {
    const results = await multicall({
      contracts: items.map(({ tokenAddress, tokenId }) => ({
        abi: erc721ABI,
        address: tokenAddress,
        functionName: "ownerOf",
        args: [tokenId],
      })),
    });

    return items.every((item, idx) => {
      return results[idx].result === account;
    });
  };
};
