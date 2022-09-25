import { useState } from "react";
import { trades } from "../../../MOCK/old";
// export const useGetTrades = () => {
//   const { data, loading, error } =
//     useQuery<GetAllTradesResponse>(GET_ALL_TRADES);
//
//   return { trades: data, loading, error };
// };

export const useGetCounteroffers = () => {
  const [state, setState] = useState(() => trades);

  // Imitating query to server
  const getCounteroffers = (value: string) =>
    setState(
      trades.filter(
        (t) => t.offer.filter((o) => o.name.includes(value)).length > 0
      )
    );
  return {
    getCounteroffers,
    counteroffers: state,
    loading: false,
    error: false,
  };
};
