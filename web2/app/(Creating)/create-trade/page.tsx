"use client";
import { useCallback, useEffect } from "react";

import { Style } from "@/shared/variables";
import { makeStyles } from "@mui/styles";

import { INftItem } from "@/interfaces";

import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";

import { useAuth } from "@/hooks";
import { RouteName } from "@/shared/routes";
import { useAppDispatch, useAppSelector } from "@/storage/hooks";

import { useGetMyItemsLazy } from "@/hooks/queries";
import { useRouter } from "next/navigation";
import YourNfts from "../components/YourNft/YourNfts";
import { YourSelection } from "../components/YourSelection/YourSelection";
import {
  removeNftFromSelected,
  selectCreateTrade,
  selectNft,
} from "./createTrade.slice";

const MAX_SELECTED_NFTS = 10;

const useCreateTradeStyles = makeStyles(() => ({
  yourSelection: {
    borderRight: `1px solid ${Style.additionalBackground}`,
    paddingBottom: "60px",
  },
  title: {
    paddingTop: "34px",
  },
  chooseNft: {
    padding: "64px",
    width: "100%",
  },
}));

const CreateTrade: React.FC = () => {
  const classes = useCreateTradeStyles();

  const { account } = useAuth();
  const [getMyItems, { data }] = useGetMyItemsLazy();

  const { selectedNFTs } = useAppSelector(selectCreateTrade);
  const navigate = useRouter();
  const dispatch = useAppDispatch();

  const handleSelectNft = useCallback(
    (item: INftItem) => {
      if (selectedNFTs.length < MAX_SELECTED_NFTS) dispatch(selectNft(item));
    },
    [selectedNFTs]
  );

  const handleRemoveNft = useCallback((item: INftItem) => {
    dispatch(removeNftFromSelected(item));
  }, []);

  const handleCreateOffers = () => {
    navigate.push(RouteName.CreateOffers + `/${1}`);
  };

  const handleSearchPressed = (e: any) => {
    if (e.key === "Enter") {
      getMyItems({
        variables: {
          owner: account,
        },
      });
    }
  };

  useEffect(() => {
    account && getMyItems({ variables: { owner: account } });
  }, [account]);

  return (
    <>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs to trade</FlexiTitle>
        <YourSelection
          selected={selectedNFTs}
          onClickNft={handleRemoveNft}
          onBtnClick={handleCreateOffers}
        />
      </main>
      <main className={classes.chooseNft}>
        {/* <FlexiInput
          placeholder={"Search by NFTs, collection name..."}
          onKeyDown={handleSearchPressed}
        /> */}
        <YourNfts
          nfts={(data?.items as INftItem[]) ?? []}
          onClickNft={handleSelectNft}
          filterFrom={selectedNFTs}
        />
      </main>
    </>
  );
};

export default CreateTrade;
