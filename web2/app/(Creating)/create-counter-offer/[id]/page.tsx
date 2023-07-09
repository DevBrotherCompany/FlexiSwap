"use client";
import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";
import { useAuth } from "@/hooks";
import { useGetMyItems } from "@/hooks/queries";
import useFlexiSwap from "@/hooks/useFlexiSwap";
import { INftItem } from "@/interfaces";
import { useAppDispatch, useAppSelector } from "@/storage/hooks";
import { useParams, useRouter } from "next/navigation";
import { useCallback } from "react";
import YourNfts from "../../components/YourNft/YourNfts";
import { YourSelection } from "../../components/YourSelection/YourSelection";
import {
  removeNftFromSelected,
  selectCreateCounterOffer,
  selectNft,
} from "./createCounterOffer.slice";
import { useClearStorage } from "../../create-offers/[id]/useClearStorage";
import { RouteName } from "@/shared/routes";

const useCounterOfferPageStyles = () => ({
  title: "pt-[34px]",
  yourSelection: "border-r-[1px] border-bgAdditional",
  chooseNft: "p-[64px] w-[100%]",
});

const MAX_SELECTED_NFTS = 10;

const CreateCounterOfferPage: React.FC = () => {
  const classes = useCounterOfferPageStyles();

  const { id: tradeId } = useParams();
  const router = useRouter();
  const { selectedNFTs } = useAppSelector(selectCreateCounterOffer);
  const dispatch = useAppDispatch();

  const { account } = useAuth();
  const { data } = useGetMyItems({ variables: { owner: account } });
  const flexiSwap = useFlexiSwap();
  const { clearStrage } = useClearStorage();

  const handleSelectNft = useCallback(
    (item: INftItem) => {
      if (selectedNFTs.length < MAX_SELECTED_NFTS) dispatch(selectNft(item));
    },
    [dispatch]
  );

  const handleRemoveNft = useCallback((item: INftItem) => {
    dispatch(removeNftFromSelected(item));
  }, []);

  const createCounterOffer = useCallback(async () => {
    if (!flexiSwap) return;

    try {
      await flexiSwap.createCounterOffer(BigInt(tradeId), selectedNFTs);
    } catch (e) {
      console.error("ERROR: ", e);
    } finally {
      clearStrage();
      router.push(RouteName.AllTrades);
    }
  }, [flexiSwap, tradeId, selectedNFTs]);

  return (
    <>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs to trade</FlexiTitle>
        <YourSelection
          labelBtn={"Create counteroffer"}
          selected={selectedNFTs}
          onClickNft={handleRemoveNft}
          onBtnClick={createCounterOffer}
        />
      </main>
      <main className={classes.chooseNft}>
        <YourNfts
          nfts={data?.items ?? []}
          onClickNft={handleSelectNft}
          filterFrom={selectedNFTs}
          isShowAnyOfCollection={false}
        />
      </main>
    </>
  );
};

export default CreateCounterOfferPage;
