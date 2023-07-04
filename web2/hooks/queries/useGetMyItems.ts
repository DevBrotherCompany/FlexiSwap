import {
  GetMyItemsQuery,
  useGetMyItemsLazyQuery,
  useGetMyItemsQuery
} from "@/packages/graphql/generated";
import { mapItem } from "./mapper";

const map = (data?: GetMyItemsQuery) => {
  if (!data) return;

  return {
    items: data.itemsByOwnerAddress.items.map(mapItem),
    nextPage: data.itemsByOwnerAddress.nextPage,
  };
};

const useGetMyItems = (
  ...baseOptions: Parameters<typeof useGetMyItemsQuery>
) => {
  const { data, ...rest } = useGetMyItemsQuery(...baseOptions);
  return { data: map(data), ...rest } as const;
};

const useGetMyItemsLazy = () => {
  const [getMyItems, { data, ...rest }] = useGetMyItemsLazyQuery();
  return [getMyItems, { data: map(data), ...rest }] as const;
};

export { useGetMyItems, useGetMyItemsLazy };

