import {
  Exact,
  GetMyTradesQuery,
  InputMaybe,
  useGetMyTradesLazyQuery,
  useGetMyTradesQuery
} from "@/packages/graphql/generated";
import { QueryHookOptions } from "@apollo/client";
import { mapTrade } from "./mapper";

const map = (data?: GetMyTradesQuery) => {
  if (!data) return;

  return data.trades.map((trade) => {
    return mapTrade(trade);
  });
};

const useGetMyTrades = (
  baseOptions: QueryHookOptions<
    GetMyTradesQuery,
    Exact<{
      first?: InputMaybe<number> | undefined;
      skip?: InputMaybe<number> | undefined;
      owner: any;
    }>
  >
) => {
  const { data, ...rest } = useGetMyTradesQuery(baseOptions);

  return { data: map(data), ...rest } as const;
};

const useGetMyTradeLazy = () => {
  const [getMyTrades, { data, ...rest }] = useGetMyTradesLazyQuery();

  return [getMyTrades, { data: map(data), ...rest }] as const;
};

export { useGetMyTradeLazy, useGetMyTrades };

