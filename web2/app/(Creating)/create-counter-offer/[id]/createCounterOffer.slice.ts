import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "@/storage/store";
import { INftItem } from "@/interfaces";

interface CreateCounterOfferSliceState {
  selectedNFTs: INftItem[];
}

const initialState: CreateCounterOfferSliceState = {
  selectedNFTs: [],
};

const createCounterOfferSlice = createSlice({
  name: "createCounterOffer",
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
  createCounterOfferSlice.actions;
export const createCounterOfferReducer = createCounterOfferSlice.reducer;
export const selectCreateCounterOffer = (state: RootState) =>
  state.createCounterOffer;
