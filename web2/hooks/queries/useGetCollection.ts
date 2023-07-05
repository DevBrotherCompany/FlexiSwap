import {
  SearchItemsCollectionQuery,
  useSearchItemsCollectionLazyQuery,
  useSearchItemsCollectionQuery
} from "@/packages/graphql/generated";
import { mapCollection } from "./mapper";

const map = (data?: SearchItemsCollectionQuery) => {
  if (!data || !data.getCollection) return;

  return mapCollection(data.getCollection);
};

const useGetCollection = (
  ...baseOptions: Parameters<typeof useSearchItemsCollectionQuery>
) => {
  const { data, ...rest } = useSearchItemsCollectionQuery(...baseOptions);
  return { data: map(data), ...rest } as const;
};

const useGetCollectionLazy = () => {
  const [getCollection, { data, ...rest }] =
    useSearchItemsCollectionLazyQuery();
  return [getCollection, { data: map(data), ...rest }] as const;
};

export { useGetCollection, useGetCollectionLazy };
