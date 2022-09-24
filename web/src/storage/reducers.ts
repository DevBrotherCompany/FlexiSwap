import { combineReducers } from "redux";
import { createTradeReducer } from "pages/Creating/page-create-trade/createTrade.slice";
import { createOfferReducer } from "pages/Creating/page-create-offers/createOffer.slice";

const reducer = combineReducers({
  createTrade: createTradeReducer,
  createOffer: createOfferReducer,
});

export default reducer;
