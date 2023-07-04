import {
  GetAllTradesQuery,
  useGetAllTradesLazyQuery,
  useGetAllTradesQuery,
} from "@/packages/graphql/generated";
import { mapTrade } from "./mapper";

const map = (data?: GetAllTradesQuery) => {
  if (!data) return;

  return data.trades.map(mapTrade);
};

const useGetAllTrades = () => {
  const { data, ...rest } = useGetAllTradesQuery();
  return { data: map(data), ...rest } as const;
};

const useGetAllTradesLazy = () => {
  const [getAllTrades, { data, ...rest }] = useGetAllTradesLazyQuery();
  return [getAllTrades, { data: map(data), ...rest }] as const;
};

export { useGetAllTrades, useGetAllTradesLazy };
