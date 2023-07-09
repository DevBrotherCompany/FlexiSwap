"use client";
import { useState } from "react";

import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";
import { NftModal } from "@/components/NftModal/NftModal";

import { useAuth, useModalsState } from "@/hooks";
import { INftItem, ITrade } from "@/interfaces";

import { useGetMyTrades } from "@/hooks/queries";
import { TradeList } from "../components/TradeList/TradeList";
import { TradesModal } from "../enums";

const MyTrades: React.FC = () => {
  const { account } = useAuth();
  const { data: trades } = useGetMyTrades({ variables: { owner: account } });
  console.log(trades);
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

  const handleClose = () => {
    setSelectedNft(null);
    closeModals();
  };

  return (
    <>
      <FlexiTitle>My trades</FlexiTitle>
      <TradeList
        list={(trades as ITrade[]) ?? []}
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
};

export default MyTrades;
