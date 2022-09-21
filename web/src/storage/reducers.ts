import { combineReducers } from "redux";
import { createTradeReducer } from "pages/Creating/page-create-trade/createTrade.slice";

const reducer = combineReducers({
  createTrade: createTradeReducer,
});

export default reducer;
