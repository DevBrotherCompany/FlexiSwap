"use client";
import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";
import { NftModal } from "@/components/NftModal/NftModal";
import { useModalsState } from "@/hooks";
import { useGetAllTrades } from "@/hooks/queries";
import { INftItem, ITrade } from "@/interfaces";
import { useState } from "react";
import { TradeList } from "../components/TradeList/TradeList";
import { TradesModal } from "../enums";

export default function AllTrades() {
  const { data } = useGetAllTrades();

  const { openModal, isModalOpened, closeModals } =
    useModalsState<TradesModal>();

  const [selectedNft, setSelectedNft] = useState<INftItem | null>(null);

  const handleClickItem = (item: INftItem) => {
    setSelectedNft(item);
    openModal(TradesModal.NftInfo);
  };

  const handleClickCollection = async () => {};

  const handleClose = () => {
    setSelectedNft(null);
    closeModals();
  };

  return (
    <>
      <FlexiTitle>All trades</FlexiTitle>
      <TradeList
        list={(data as ITrade[]) ?? []}
        onClick={handleClickItem}
        onClickCollection={handleClickCollection}
      />
      <NftModal
        item={selectedNft}
        open={isModalOpened(TradesModal.NftInfo)}
        onClose={handleClose}
      />
    </>
  );
}
