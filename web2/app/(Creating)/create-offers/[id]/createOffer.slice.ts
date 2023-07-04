import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { INftItem } from "@/interfaces";
import { RootState } from "@/storage/store";

interface CreateOfferData {
  id: number;
  selected: INftItem[];
}

interface CreateOfferSliceState {
  offers: CreateOfferData[];
}

interface IAddToOffer {
  item: INftItem;
  id: number;
}

const initialState: CreateOfferSliceState = {
  offers: [],
};

const createOfferSlice = createSlice({
  name: "createOffer",
  initialState,
  reducers: {
    addOffer(state, action: PayloadAction<CreateOfferData>) {
      state.offers.push(action.payload);
    },
    removeOffer(state, action: PayloadAction<CreateOfferData>) {
      state.offers = state.offers.filter((nft) => nft.id !== action.payload.id);
    },
    addNftForOffer(state, action: PayloadAction<IAddToOffer>) {
      let offer: CreateOfferData | undefined = state.offers.find(
        (o) => o.id ===action.payload.id
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
      let offer = state.offers.find((o) => o.id ===action.payload.id);
      if (offer) {
        offer.selected = offer.selected.filter(
          (s) => s.tokenId !== action.payload.item.tokenId
        );
      }
    },
    clearOffers(state) {
      state.offers = [];
    },
  },
});

export const {
  addOffer,
  removeOffer,
  addNftForOffer,
  removeNftFromOffer,
  clearOffers,
} = createOfferSlice.actions;
export const createOfferReducer = createOfferSlice.reducer;
export const selectCreateOffer = (state: RootState) => state.createOffer;
