import { INftItem } from "@/interfaces";

export const useListInfo = (list: INftItem[], countItemsToShow: number) => {
  const displayItems =
    list.length > countItemsToShow ? list.slice(0, countItemsToShow) : list;
  const additionalCount = list.length - displayItems.length;
  return { displayItems, additionalCount, isMany: additionalCount > 0 };
};
