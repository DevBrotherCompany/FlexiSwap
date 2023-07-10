import { INftItem, ITrade } from "@/interfaces";

export const useHiddenDetailsTrades = ({
  receivings,
  counterOffers,
}: Pick<ITrade, "receivings" | "counterOffers">) => {
  let previewReceivingItems: INftItem[] = [];
  const isPreviewCollection = receivings[0].items.every((item) => item);

  const receivingCount = receivings.length;
  const counterOffersCount = counterOffers?.length ?? 0;

  const mapItem = (item: INftItem): INftItem => ({
    ...item,
    tokenId: item?.tokenId,
    tokenAddress: item?.tokenAddress,
  });

  previewReceivingItems = receivings[0].items.map(({ item }) =>
    mapItem(item!)
  ) as INftItem[];
  const previewCounterOffersItems =
    counterOffersCount !== 0
      ? counterOffers[0].items.map(({ item }) => mapItem(item))
      : [];

  return {
    previewReceivingItems,
    previewCounterOffersItems,
    isPreviewCollection,
    receivingCount,
    counterOffersCount,
    isManyReceivings: receivingCount > 1,
    isManyCounterOffers: counterOffersCount > 1,
  };
};
