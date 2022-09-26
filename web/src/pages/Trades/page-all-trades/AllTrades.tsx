import React, { useEffect, useState } from "react";

import { useDebounce, useModalsState } from "hooks";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";
import { NftModal } from "shared/NftModal/NftModal";
import { CollectionModal } from "shared/CollectionModal/CollectionModal";

import { INftCollection, INftItem } from "interfaces";
import { TradesModal } from "../enums";

import { TradesLayout } from "../components/TradesLayout/TradesLayout";
import { TradeList } from "../components/TradeList/TradeList";

import {
  useGetAllTradesQuery,
  useSearchItemsLazyQuery,
} from "packages/graphql/generated";

const AllTrades: React.FC = () => {
  const { data } = useGetAllTradesQuery();
  const [searchItems, { data: searchData }] = useSearchItemsLazyQuery();

  const { openModal, isModalOpened, closeModals } =
    useModalsState<TradesModal>();

  const [selectedNft, setSelectedNft] = useState<INftItem | null>(null);
  const [selectedCollection, setSelectedCollection] =
    useState<INftCollection | null>(null);
  const [search, setSearch] = useState("");
  const debouncedSearch = useDebounce(search, 100);

  const handleClickItem = (item: INftItem) => {
    setSelectedNft(item);
    openModal(TradesModal.NftInfo);
  };

  const handleClickCollection = (collection: INftCollection) => {
    setSelectedCollection(collection);
    openModal(TradesModal.CollectionInfo);
  };

  const handleClose = () => {
    setSelectedNft(null);
    setSelectedCollection(null);
    closeModals();
  };

  useEffect(() => {
    searchItems({ variables: { search: debouncedSearch } });
  }, [debouncedSearch]);

  return (
    <>
      <TradesLayout onSearchChange={setSearch}>
        <FlexiTitle>All trades</FlexiTitle>
        <TradeList
          //@ts-ignore
          list={data?.trades ?? []}
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
