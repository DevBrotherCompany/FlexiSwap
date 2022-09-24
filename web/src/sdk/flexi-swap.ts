import { ethers } from 'ethers';
import { FLEXISWAP_ABI, FLEXISWAP_ADDRESS, IERC721_ABI } from './constants';

type Item = {
  tokenAddress: string;
  tokenId: ethers.BigNumberish;
};

type NullableItem = {
  tokenAddress: string;
  tokenId: ethers.BigNumberish | null;
};

// TODO: Add typechain types
export class FlexiSwap {
  private readonly flexiSwapContract: ethers.Contract;

  constructor(private readonly signer: ethers.Signer) {
    this.flexiSwapContract = new ethers.Contract(FLEXISWAP_ADDRESS, FLEXISWAP_ABI, signer);
  }

  private createERC721 = (erc721Address: string): ethers.Contract => {
    return new ethers.Contract(erc721Address, IERC721_ABI, this.signer);
  };

  private mapItem = (item: Item | NullableItem) => {
    return {
      nftAddress: item.tokenAddress,
      tokenId: item.tokenId ?? 0,
      isEmptyToken: item.tokenId === null,
    };
  };

  // TODO: Check if token is already approved
  private approveItem = async (item: Item): Promise<void> => {
    const erc721Contract = this.createERC721(item.tokenAddress);
    const approveTx = await erc721Contract.approve(
      this.flexiSwapContract.address,
      item.tokenId,
    );
    await approveTx.wait();
  };

  createTrade = async (
    givings: Item[],
    receivings: NullableItem[][],
  ): Promise<void> => {
    await Promise.all(givings.map(this.approveItem));

    const contractGivings = givings.map(this.mapItem);
    const contractReceivings = receivings.map(
      (items) => items.map(this.mapItem),
    );
    const createTradeTx = await this.flexiSwapContract.createTrade(
      contractGivings,
      contractReceivings,
    );
    await createTradeTx.wait();
  };

  acceptOffer = async (
    tradeId: ethers.BigNumberish,
    receivingId: ethers.BigNumberish,
    receivings: Item[],
    additionalItems: Item[],
  ): Promise<void> => {
    await Promise.all(
      [...receivings, ...additionalItems].map(this.approveItem),
    );

    const contractAdditionalItems = additionalItems.map(this.mapItem);
    const acceptOfferTx = await this.flexiSwapContract.acceptOffer(
      tradeId,
      receivingId,
      contractAdditionalItems,
    );
    await acceptOfferTx.wait();
  };

  createCounterOffer = async (
    tradeId: ethers.BigNumberish,
    items: Item[],
  ): Promise<void> => {
    await Promise.all(items.map(this.approveItem));

    const contractItems = items.map(this.mapItem);
    const createCounterOfferTx =
      await this.flexiSwapContract.createCounterOffer(tradeId, contractItems);
    await createCounterOfferTx.wait();
  };

  acceptCounterOffer = async (
    tradeId: ethers.BigNumberish,
    counterOfferId: ethers.BigNumberish,
  ): Promise<void> => {
    const acceptCounterOfferTx =
      await this.flexiSwapContract.acceptCounterOffer(tradeId, counterOfferId);
    await acceptCounterOfferTx.wait();
  };
}
