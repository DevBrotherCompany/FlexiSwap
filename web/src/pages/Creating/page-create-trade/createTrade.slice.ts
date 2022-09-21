import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "storage/store";
import { INft } from "interfaces";

interface CreateTradeSliceState {
  selectedNFTs: INft[];
}

const initialState: CreateTradeSliceState = {
  selectedNFTs: [],
};

const createTradeSlice = createSlice({
  name: "createTrade",
  initialState,
  reducers: {
    selectNft(state, action: PayloadAction<INft>) {
      state.selectedNFTs.push(action.payload);
    },
    removeNftFromSelected(state, action: PayloadAction<INft>) {
      state.selectedNFTs = state.selectedNFTs.filter(
        (nft) => nft.id !== action.payload.id
      );
    },
  },
});

export const { selectNft, removeNftFromSelected } = createTradeSlice.actions;
export const createTradeReducer = createTradeSlice.reducer;
export const selectCreateTrade = (state: RootState) => state.createTrade;
