import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "storage/store";
import { INftItem, IOffer } from "interfaces";

interface CreateOfferSliceState {
  offers: IOffer[];
}

interface IAddToOffer {
  item: INftItem;
  id: number;
}

const initialState: CreateOfferSliceState = {
  offers: [
    // {
    //   id: 1,
    //   selected: [],
    // },
    // {
    //   id: 2,
    //   selected: [],
    // },
    // {
    //   id: 3,
    //   selected: [],
    // },
    // {
    //   id: 4,
    //   selected: [],
    // },
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
      state.offers = state.offers.filter((nft) => nft.id !== action.payload.id);
    },
    addNftForOffer(state, action: PayloadAction<IAddToOffer>) {
      let offer: IOffer | undefined = state.offers.find(
        (o) => o.id === action.payload.id
      );
      if (!offer) {
        state.offers.push({
          id: action.payload.id,
          selected: [action.payload.item],
        });
      }
      offer?.selected.push(action.payload.item);
    },
    removeNftFromOffer(state, action: PayloadAction<IAddToOffer>) {
      let offer = state.offers.find((o) => o.id === action.payload.id);
      if (offer) {
        offer.selected = offer.selected.filter(
          (s) => s.tokenId !== action.payload.item.tokenId
        );
      }
    },
  },
});

export const { addOffer, removeOffer, addNftForOffer, removeNftFromOffer } =
  createOfferSlice.actions;
export const createOfferReducer = createOfferSlice.reducer;
export const selectCreateOffer = (state: RootState) => state.createOffer;
