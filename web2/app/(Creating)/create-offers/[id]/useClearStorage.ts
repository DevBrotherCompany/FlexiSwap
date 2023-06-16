import { useAppDispatch } from "@/storage/hooks";

import { clearSelected } from "@/app/(Creating)/create-trade/createTrade.slice";
import { clearOffers } from "./createOffer.slice";

export const useClearStorage = () => {
  const dispatch = useAppDispatch();

  const clearStrage = () => {
    dispatch(clearSelected());
    dispatch(clearOffers());
  };

  return { clearStrage };
};
