import { mapItem } from "./mapper";
import {
  SearchItemsQuery,
  useSearchItemsLazyQuery,
  useSearchItemsQuery,
} from "@/packages/graphql/generated";

const map = (data?: SearchItemsQuery) => {
  if (!data) return;

  return {
    searchItems: {
      items: data.search.map(mapItem),
    },
  };
};

const useSearchItems = (
  ...baseOptions: Parameters<typeof useSearchItemsQuery>
) => {
  const { data, ...rest } = useSearchItemsQuery(...baseOptions);
  return { data: map(data), ...rest } as const;
};

const useSearchItemsLazy = () => {
  const [searchItems, { data, ...rest }] = useSearchItemsLazyQuery();
  return [searchItems, { data: map(data), ...rest }] as const;
};

export { useSearchItems, useSearchItemsLazy };
