import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NullableItem } from "@/sdk/types";
import { RootState } from "@/storage/store";
import { INullableItem } from "@/interfaces";

interface CreateOfferData {
  id: number;
  items: INullableItem[]; //INftItem[];
}

interface CreateOfferSliceState {
  offers: CreateOfferData[];
}

interface IAddToOffer {
  item: INullableItem;
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
      const offer = state.offers.find(({ id }) => id === action.payload.id);
      if (!offer) {
        state.offers.push({
          id: action.payload.id,
          items: [action.payload.item],
        });
      }
      offer?.items.push(action.payload.item);
    },
    removeNftFromOffer(state, action: PayloadAction<IAddToOffer>) {
      const offer = state.offers.find(({ id }) => id === action.payload.id);
      if (offer) {
        offer.items = offer.items.filter(
          (s) =>
            !(
              s.tokenId === action.payload.item.tokenId &&
              s.tokenAddress === action.payload.item.tokenAddress
            )
        );
      }
    },
    removeCollectionFromOffer(state, action: PayloadAction<IAddToOffer>) {
      const offer = state.offers.find(({ id }) => id === action.payload.id);
      if (offer) {
        offer.items = offer.items.filter(
          (s) => s.tokenAddress !== action.payload.item.tokenAddress
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
  removeCollectionFromOffer,
  clearOffers,
} = createOfferSlice.actions;
export const createOfferReducer = createOfferSlice.reducer;
export const selectCreateOffer = (state: RootState) => state.createOffer;
