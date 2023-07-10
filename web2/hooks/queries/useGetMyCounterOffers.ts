import {
  GetMyCounterOffersQuery,
  useGetMyCounterOffersLazyQuery,
  useGetMyCounterOffersQuery,
} from "@/packages/graphql/generated";
import { mapTrade } from "./mapper";

const map = (data?: GetMyCounterOffersQuery) => {
  if (!data) return;

  return data.trades.map((trade) => {
    return mapTrade(trade);
  });
};

const useGetMyCounterOffers = (
  ...baseOptions: Parameters<typeof useGetMyCounterOffersQuery>
) => {
  const { data, ...rest } = useGetMyCounterOffersQuery(...baseOptions);

  return { data: map(data), ...rest } as const;
};

const useGetMyCounterOffersLazy = () => {
  const [getMyTrades, { data, ...rest }] = useGetMyCounterOffersLazyQuery();

  return [getMyTrades, { data: map(data), ...rest }] as const;
};

export { useGetMyCounterOffers, useGetMyCounterOffersLazy };
