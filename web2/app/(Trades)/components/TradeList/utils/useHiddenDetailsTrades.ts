import { INftItem, IReceiving } from "@/interfaces";

export const useHiddenDetailsTrades = (receivings: IReceiving[]) => {
  let previewReceivingItems: INftItem[] = [];
  const previewReceivingCollection = receivings[0].items[0].collection;
  const isPreviewCollection = !receivings[0].items[0].item;

  const receivingCount = receivings.length;

  if (!isPreviewCollection) {
    previewReceivingItems = receivings[0].items.map(({ item }) => ({
      ...item,
      tokenId: item?.tokenId ?? "",
      tokenAddress: item?.tokenAddress ?? "",
    }));
  }

  return {
    previewReceivingItems,
    previewReceivingCollection,
    isPreviewCollection,
    receivingCount,
    isManyReceivings: receivingCount > 1,
  };
};
