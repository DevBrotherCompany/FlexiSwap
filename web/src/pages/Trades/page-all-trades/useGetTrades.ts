import { trades } from "MOCK";
import { useState } from "react";

// export const useGetTrades = () => {
//   const { data, loading, error } =
//     useQuery<GetAllTradesResponse>(GET_ALL_TRADES);
//
//   return { trades: data, loading, error };
// };

export const useGetTrades = () => {
  const [state, setState] = useState(() => trades);

  // Imitating query to server
  const getTrades = (value: string) =>
    setState(
      trades.filter(
        (t) => t.offer.filter((o) => o.name.includes(value)).length > 0
      )
    );
  return { getTrades, trades: state, loading: false, error: false };
};
