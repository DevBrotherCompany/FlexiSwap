import React, { useCallback } from "react";
import { useCreateTradeStyles } from "./CreateTrade.style";

import { useNavigate } from "react-router-dom";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";
import { FlexiInput } from "components/FlexiInput/FlexiInput";

import { YourSelection } from "pages/Creating/components/YourSelection/YourSelection";
import { ChooseNfts } from "pages/Creating/components/ChooseNfts/ChooseNfts";

import { useAppDispatch, useAppSelector } from "storage/hooks";

import { TradeLayout } from "./TradeLayout/TradeLayout";
import {
  removeNftFromSelected,
  selectCreateTrade,
  selectNft,
} from "./createTrade.slice";
import { RouteName } from "shared/routes";

import { allNfts } from "MOCK";

import { INft } from "interfaces";

export const MAX_SELECTED_NFTS = 10;

const CreateTrade: React.FC = () => {
  const classes = useCreateTradeStyles();

  const { selectedNFTs } = useAppSelector(selectCreateTrade);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSelectNft = useCallback(
    (item: INft) => {
      if (selectedNFTs.length < MAX_SELECTED_NFTS) dispatch(selectNft(item));
    },
    [selectedNFTs]
  );

  const handleRemoveNft = useCallback((item: INft) => {
    dispatch(removeNftFromSelected(item));
  }, []);

  const handleCreateOffers = () => {
    navigate(RouteName.CreateOffers + `/${1}`);
  };

  return (
    <TradeLayout>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs to trade</FlexiTitle>
        <YourSelection
          selected={selectedNFTs}
          onClickNft={handleRemoveNft}
          onBtnClick={handleCreateOffers}
        />
      </main>
      <main className={classes.chooseNft}>
        <FlexiInput placeholder={"Search by NFTs, collection name..."} />
        <ChooseNfts
          nfts={allNfts}
          onClickNft={handleSelectNft}
          filterFrom={selectedNFTs}
        />
      </main>
    </TradeLayout>
  );
};

export default CreateTrade;
