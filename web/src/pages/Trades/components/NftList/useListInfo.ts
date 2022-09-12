import { INft } from "interfaces";

export const useListInfo = (list: INft[]) => {
  const displayItems = list.length > 3 ? list.slice(0, 3) : list;
  const additionalCount = list.length - displayItems.length;
  return { displayItems, additionalCount, isMany: additionalCount > 0 };
};
