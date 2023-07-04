import { INftItem, IReceivingsOffer } from "@/interfaces";

export const useHiddenDetailsTrades = (receivings: IReceivingsOffer[]) => {
  let previewReceivingItems: INftItem[] = [];
  const previewReceivingCollection = receivings[0]?.items[0]?.collection ?? {};
  const isPreviewCollection = receivings[0].items.every((item) => item);

  const receivingCount = receivings.length;

  if (!isPreviewCollection) {
    previewReceivingItems = receivings[0].items.map(({ item }) => ({
      ...item,
      tokenId: item?.tokenId,
      tokenAddress: item?.tokenAddress,
    })) as INftItem[];
  }

  return {
    previewReceivingItems,
    previewReceivingCollection,
    isPreviewCollection,
    receivingCount,
    isManyReceivings: receivingCount > 1,
  };
};
