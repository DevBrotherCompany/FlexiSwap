import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "storage/store";
import { IOffer } from "interfaces";

interface CreateOfferSliceState {
  offers: IOffer[];
}

const initialState: CreateOfferSliceState = {
  offers: [
    {
      number: 1,
      selected: [],
    },
    {
      number: 2,
      selected: [],
    },
    {
      number: 3,
      selected: [],
    },
    {
      number: 4,
      selected: [],
    },
  ],
};

const createOfferSlice = createSlice({
  name: "createOffer",
  initialState,
  reducers: {
    addOffer(state, action: PayloadAction<IOffer>) {
      state.offers.push(action.payload);
    },
    removeOffer(state, action: PayloadAction<IOffer>) {
      state.offers = state.offers.filter(
        (nft) => nft.number !== action.payload.number
      );
    },
  },
});

export const { addOffer, removeOffer } = createOfferSlice.actions;
export const createOfferReducer = createOfferSlice.reducer;
export const selectCreateOffer = (state: RootState) => state.createOffer;
