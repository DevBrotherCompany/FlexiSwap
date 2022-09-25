import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "storage/store";
// import { INft } from "interfaces/old";
import { INftItem } from "interfaces";

interface CreateTradeSliceState {
  selectedNFTs: INftItem[];
}

const initialState: CreateTradeSliceState = {
  selectedNFTs: [],
};

const createTradeSlice = createSlice({
  name: "createTrade",
  initialState,
  reducers: {
    selectNft(state, action: PayloadAction<INftItem>) {
      state.selectedNFTs.push(action.payload);
    },
    removeNftFromSelected(state, action: PayloadAction<INftItem>) {
      state.selectedNFTs = state.selectedNFTs.filter(
        (nft) => nft.tokenId !== action.payload.tokenId
      );
    },
    clearSelected(state) {
      state.selectedNFTs = [];
    },
  },
});

export const { selectNft, removeNftFromSelected, clearSelected } =
  createTradeSlice.actions;
export const createTradeReducer = createTradeSlice.reducer;
export const selectCreateTrade = (state: RootState) => state.createTrade;
