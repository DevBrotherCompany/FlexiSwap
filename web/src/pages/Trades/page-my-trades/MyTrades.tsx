import React, { useState } from "react";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";
import { NftModal } from "shared/NftModal/NftModal";
import { CollectionModal } from "shared/CollectionModal/CollectionModal";

import {
  useGetMyTradesQuery,
  useSearchItemsCollectionLazyQuery,
} from "packages/graphql/generated";
import { INftCollection, INftItem } from "interfaces";
import { useAuth, useModalsState } from "hooks";

import { TradesModal } from "../enums";

import { TradesLayout } from "../components/TradesLayout/TradesLayout";
import { TradeList } from "../components/TradeList/TradeList";

const MyTrades: React.FC = () => {
  const { account } = useAuth();
  const { data } = useGetMyTradesQuery({ variables: { owner: account } });
  const [searchCollection, { data: dataCollection }] =
    useSearchItemsCollectionLazyQuery();

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

    setSelectedCollection(dataCollection?.getCollection ?? null);
    openModal(TradesModal.CollectionInfo);
  };

  const handleClose = () => {
    setSelectedNft(null);
    setSelectedCollection(null);
    closeModals();
  };

  // console.log('===My trades -> data===', data)

  // const fromLocalStorage = storage.get(StorageKey.NftTrades) ?? []

  return (
    <>
      <TradesLayout>
        <FlexiTitle>My trades</FlexiTitle>
        <TradeList
          list={(data?.trades as any) ?? []}
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

export default MyTrades;
