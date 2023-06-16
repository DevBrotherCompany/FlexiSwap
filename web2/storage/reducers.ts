import { createOfferReducer } from "@/app/(Creating)/create-offers/[id]/createOffer.slice";
import { createTradeReducer } from "@/app/(Creating)/create-trade/createTrade.slice";
import { combineReducers } from "redux";

const reducer = combineReducers({
  createTrade: createTradeReducer,
  createOffer: createOfferReducer,
});

export default reducer;
