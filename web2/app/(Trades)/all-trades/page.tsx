"use client";
import { CollectionModal } from "@/components/CollectionModal/CollectionModal";
import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";
import { NftModal } from "@/components/NftModal/NftModal";
import { useModalsState } from "@/hooks";
import { useGetAllTrades, useGetCollectionLazy } from "@/hooks/queries";
import { INftCollection, INftItem, ITrade } from "@/interfaces";
import { useState } from "react";
import { TradeList } from "../components/TradeList/TradeList";
import { TradesModal } from "../enums";

export default function AllTrades() {
  const { data } = useGetAllTrades();
  const [searchCollection, { data: dataCollection }] = useGetCollectionLazy();

  const { openModal, isModalOpened, closeModals } =
    useModalsState<TradesModal>();

  const [selectedNft, setSelectedNft] = useState<INftItem | null>(null);
  const [selectedCollection, setSelectedCollection] =
    useState<INftCollection | null>(null);

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
      <CollectionModal
        collection={selectedCollection}
        open={isModalOpened(TradesModal.CollectionInfo)}
        onClose={handleClose}
      />
    </>
  );
}
