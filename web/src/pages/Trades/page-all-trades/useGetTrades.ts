import { useGetAllTradesLazyQuery } from 'packages/graphql/generated'

export const useGetTrades = () => {
  const [getTrades, { data, loading, error }] = useGetAllTradesLazyQuery()

  return { getTrades, trades: data?.trades ?? [], loading, error }
}

// export const useGetTrades = () => {
//   const [state, setState] = useState(() => trades);
//
//   // Imitating query to server
//   const getTrades = (value: string) =>
//     setState(
//       trades.filter(
//         (t) => t.offer.filter((o) => o.name.includes(value)).length > 0
//       )
//     );
//   return { getTrades, trades: state, loading: false, error: false };
// };
