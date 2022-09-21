import React, { useEffect, useState } from "react";

import { useDebounce, useModalsState } from "hooks";
import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

import { NftModal } from "shared/NftModal/NftModal";

import { INft } from "interfaces";
import { TradesModal } from "../enums";

import { TradesLayout } from "../components/TradesLayout/TradesLayout";
import { TradeList } from "../components/TradeList/TradeList";

import { useGetTrades } from "./useGetTrades";
import { CollectionModal } from "../../../shared/CollectionModal/CollectionModal";

const AllTrades: React.FC = () => {
  const { trades, getTrades } = useGetTrades();

  const { openModal, isModalOpened, closeModals } =
    useModalsState<TradesModal>();

  const [selectedNft, setSelectedNft] = useState<INft | null>(null);
  const [selectedCollection, setSelectedCollection] = useState<INft[] | null>(
    null
  );
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 100);

  const handleClickItem = (item: INft) => {
    setSelectedNft(item);
    openModal(TradesModal.NftInfo);
  };

  const handleClickCollection = (collection: INft[]) => {
    setSelectedCollection(collection);
    openModal(TradesModal.CollectionInfo);
  };

  const handleClose = () => {
    setSelectedNft(null);
    setSelectedCollection(null);
    closeModals();
  };

  useEffect(() => {
    getTrades(debouncedSearch);
  }, [debouncedSearch]);

  return (
    <>
      <TradesLayout onSearchChange={setSearch}>
        <FlexiTitle>All trades</FlexiTitle>
        <TradeList
          list={trades}
          onClick={handleClickItem}
          onClickCollection={handleClickCollection}
        />
      </TradesLayout>
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

export default AllTrades;
