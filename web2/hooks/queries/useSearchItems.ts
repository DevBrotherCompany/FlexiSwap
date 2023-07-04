import {
    Exact,
    InputMaybe,
    SearchItemsQuery,
    useSearchItemsLazyQuery,
    useSearchItemsQuery
} from "@/packages/graphql/generated";
import { QueryHookOptions } from "@apollo/client";
import { mapItem } from "./mapper";

const map = (data?: SearchItemsQuery) => {
  if (!data) return;

  return {
    searchItems: {
      items: data.searchItems.items.map(mapItem),
      nextPage: data.searchItems.nextPage,
    },
  };
};

const useSearchItems = (
  baseOptions: QueryHookOptions<
    SearchItemsQuery,
    Exact<{
      search: string;
      nextPage?: InputMaybe<number> | undefined;
    }>
  >
) => {
  const { data, ...rest } = useSearchItemsQuery(baseOptions);
  return { data: map(data), ...rest } as const;
};

const useSearchItemsLazy = () => {
  const [searchItems, { data, ...rest }] = useSearchItemsLazyQuery();
  return [searchItems, { data: map(data), ...rest }] as const;
};

export { useSearchItems, useSearchItemsLazy };

