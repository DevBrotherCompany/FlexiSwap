"use client";
import { useState } from "react";

import { CollectionModal } from "@/components/CollectionModal/CollectionModal";
import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";
import { NftModal } from "@/components/NftModal/NftModal";

import { useAuth, useModalsState } from "@/hooks";
import { INftCollection, INftItem, ITrade } from "@/interfaces";

import { useGetCollectionLazy } from "@/hooks/queries";
import { useGetMyTrades } from "@/hooks/queries";
import { TradeList } from "../components/TradeList/TradeList";
import { TradesModal } from "../enums";

const MyTrades: React.FC = () => {
  const { account } = useAuth();
  const { data: trades } = useGetMyTrades({ variables: { owner: account } });
  const [searchCollection, { data: dataCollection }] = useGetCollectionLazy();

  const [selectedNft, setSelectedNft] = useState<INftItem | null>(null);
  const [selectedCollection, setSelectedCollection] =
    useState<INftCollection | null>(null);

  const { openModal, isModalOpened, closeModals } =
    useModalsState<TradesModal>();

  const handleClickItem = (item: INftItem) => {
    setSelectedNft(item);
    openModal(TradesModal.NftInfo);
  };

  const handleClickCollection = async (collection: INftCollection) => {
    await searchCollection({ variables: { search: collection.tokenAddress } });

    setSelectedCollection((dataCollection as INftCollection) ?? null);
    openModal(TradesModal.CollectionInfo);
  };

  const handleClose = () => {
    setSelectedNft(null);
    setSelectedCollection(null);
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
      <CollectionModal
        collection={selectedCollection}
        open={isModalOpened(TradesModal.CollectionInfo)}
        onClose={handleClose}
      />
    </>
  );
};

export default MyTrades;
