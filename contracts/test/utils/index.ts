import { ethers } from "hardhat";
import { IFlexiSwap, TestToken } from "../../typechain-types";

export function generateItemsFromTokens(
  tokens: Array<Array<any>>
): IFlexiSwap.ItemStruct[] {
  return tokens.map((token) => ({
    nftAddress: token[0],
    tokenId: token[1],
    isEmptyToken: false,
  }));
}

export async function mintTokens(
  token: TestToken,
  owner: string,
  amount: number,
  tokenIdOffset: number = 0
): Promise<any> {
  await token.mint(owner, amount);
  return new Array(10)
    .fill(0)
    .map((_, i) => [token.address, i + tokenIdOffset]);
}

export async function mintItems(hardhatTestToken: any, addr1: any, addr2: any) {
  const mintedGivings = await mintTokens(hardhatTestToken, addr1.address, 10);
  const givings = generateItemsFromTokens(mintedGivings);

  const mintedReceivings = await mintTokens(
    hardhatTestToken,
    addr2.address,
    10,
    10
  );
  const receivings = generateItemsFromTokens(mintedReceivings);

  return { mintedGivings, givings, mintedReceivings, receivings };
}

export async function approve(
  token: TestToken,
  spender: string,
  tokenIds: number[],
  tokensOwner: any
): Promise<void> {
  await Promise.all(
    tokenIds.map((tokenId) =>
      token.connect(tokensOwner).approve(spender, tokenId)
    )
  );
}

export function generateItems(
  itemsCount: number,
  address?: string
): IFlexiSwap.ItemStruct[] {
  let items: IFlexiSwap.ItemStruct[] = [];
  for (let i = 0; i < itemsCount; i++) {
    items.push({
      nftAddress: address ?? ethers.Wallet.createRandom().address,
      tokenId: Math.floor(Math.random() * 1000),
      isEmptyToken: false,
    });
  }

  return items;
}
