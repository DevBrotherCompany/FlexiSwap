import {
  GetMyTradesQuery,
  useGetMyTradesLazyQuery,
  useGetMyTradesQuery
} from "@/packages/graphql/generated";
import { mapTrade } from "./mapper";

const map = (data?: GetMyTradesQuery) => {
  if (!data) return;

  return data.trades.map((trade) => {
    return mapTrade(trade);
  });
};

const useGetMyTrades = (
  ...baseOptions: Parameters<typeof useGetMyTradesQuery>
) => {
  const { data, ...rest } = useGetMyTradesQuery(...baseOptions);

  return { data: map(data), ...rest } as const;
};

const useGetMyTradeLazy = () => {
  const [getMyTrades, { data, ...rest }] = useGetMyTradesLazyQuery();

  return [getMyTrades, { data: map(data), ...rest }] as const;
};

export { useGetMyTradeLazy, useGetMyTrades };

