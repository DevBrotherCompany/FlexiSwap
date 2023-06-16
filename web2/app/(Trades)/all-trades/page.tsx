"use client";
import { mocked_allTrades } from "@/MOCK";
import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";
import { TradeList } from "../components/TradeList/TradeList";
import {
  useGetAllTradesQuery,
  useSearchItemsCollectionLazyQuery,
} from "@/packages/graphql/generated";
import { useModalsState } from "@/hooks";
import { useState } from "react";
import { INftCollection, INftItem } from "@/interfaces";
import { TradesModal } from "../enums";
import { NftModal } from "@/components/NftModal/NftModal";
import { CollectionModal } from "@/components/CollectionModal/CollectionModal";

export default function AllTrades() {
  const { data } = useGetAllTradesQuery();
  const [searchCollection, { data: dataCollection }] =
    useSearchItemsCollectionLazyQuery();
  // const [searchItems, { data: searchData }] = useSearchItemsLazyQuery()

  const { openModal, isModalOpened, closeModals } =
    useModalsState<TradesModal>();

  const [selectedNft, setSelectedNft] = useState<INftItem | null>(null);
  const [selectedCollection, setSelectedCollection] =
    useState<INftCollection | null>(null);

  const handleClickItem = (item: INftItem) => {
    console.log("===item===", item);
    setSelectedNft(item);
    openModal(TradesModal.NftInfo);
  };

  const handleClickCollection = async (collection: INftCollection) => {
    await searchCollection({ variables: { search: collection.tokenAddress } });
    setSelectedCollection(dataCollection?.getCollection ?? null);
    openModal(TradesModal.CollectionInfo);
    // collection.tokenAddress
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
        list={mocked_allTrades}
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
