"use client";
import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";
import { NftModal } from "@/components/NftModal/NftModal";
import { useAuth, useModalsState } from "@/hooks";
import { useGetMyTrades } from "@/hooks/queries";
import { INftItem, ITrade } from "@/interfaces";
import { useState } from "react";
import { TradeList } from "../components/TradeList/TradeList";
import { TradesModal } from "../enums";

export default function MyCounterOffers() {
  const { account } = useAuth();
  const { data: trades } = useGetMyTrades({ variables: { owner: account } });
  const [selectedNft, setSelectedNft] = useState<INftItem | null>(null);

  const { openModal, isModalOpened, closeModals } =
    useModalsState<TradesModal>();

  const handleClickItem = (item: INftItem) => {
    setSelectedNft(item);
    openModal(TradesModal.NftInfo);
  };

  const handleClickCollection = async () => {
    openModal(TradesModal.CollectionInfo);
  };

  console.log(trades);

  const handleClose = () => {
    setSelectedNft(null);
    closeModals();
  };
  return (
    <>
      <FlexiTitle>My Counteroffers</FlexiTitle>

      <TradeList
        list={
          (trades?.filter(
            ({ counterOffers }) => counterOffers?.length
          ) as ITrade[]) ?? []
        }
        variant="onlyCounterOffers"
        onClick={handleClickItem}
      />
      <NftModal
        item={selectedNft}
        open={isModalOpened(TradesModal.NftInfo)}
        onClose={handleClose}
      />
    </>
  );
}
