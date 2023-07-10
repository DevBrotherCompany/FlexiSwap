"use client";
import { Style } from "@/shared/variables";
import { makeStyles } from "@mui/styles";
import React, { useEffect } from "react";

import { FlexiInput } from "@/components/FlexiInput/FlexiInput";
import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";
import { RouteName } from "@/shared/routes";

import { INftItem } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/storage/hooks";

import { ChooseNfts } from "../../components/ChooseNfts/ChooseNfts";
import { YourSelection } from "../../components/YourSelection/YourSelection";

import { useSearchItemsLazy } from "@/hooks/queries";
import { useParams, useRouter } from "next/navigation";
import {
  addNftForOffer,
  removeNftFromOffer,
  selectCreateOffer,
} from "./createOffer.slice";

const useCreateOffersStyles = makeStyles(() => ({
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

const CreateOffers: React.FC = () => {
  const classes = useCreateOffersStyles();

  const [getNfts, { data }] = useSearchItemsLazy();

  const router = useRouter();
  const { id } = useParams();
  const { offers } = useAppSelector(selectCreateOffer);
  const dispatch = useAppDispatch();

  const currentOffer = offers.find((o) => o.id === Number(id));

  const handleAddNftToOffer = (item: INftItem) => {
    dispatch(
      addNftForOffer({
        item,
        id: Number(id),
      })
    );
  };

  const handleRemoveNft = (item: INftItem) => {
    dispatch(removeNftFromOffer({ id: Number(id), item }));
  };

  const handleAddOffer = () => {
    router.push(RouteName.CreateOffers + "/" + (Number(id) + 1));
  };

  const handleSearchPressed = (e: any) => {
    if (e.key === "Enter") {
      getNfts({ variables: { searchString: e.target.value } });
    }
  };

  useEffect(() => {
    getNfts({ variables: { searchString: "Ape 12" } });
  }, []);

  return (
    <>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs for offer</FlexiTitle>
        <YourSelection
          selected={currentOffer?.selected ?? []}
          onClickNft={handleRemoveNft}
          onBtnClick={handleAddOffer}
          labelBtn={"Add offer"}
          //disabledBtn={offers.length > 6}
        />
      </main>
      <main className={classes.chooseNft}>
        <FlexiInput
          onKeyDown={handleSearchPressed}
          placeholder={
            "Search by NFTs, collection name (Press enter to search)..."
          }
        />
        <ChooseNfts
          nfts={data?.searchItems.items ?? []}
          title={"All NFTs"}
          onClickNft={handleAddNftToOffer}
          filterFrom={currentOffer?.selected}
        />
      </main>
    </>
  );
};

export default CreateOffers;
