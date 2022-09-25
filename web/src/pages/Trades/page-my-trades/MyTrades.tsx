import React, { useState } from "react";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";
import { NftModal } from "shared/NftModal/NftModal";
import { CollectionModal } from "shared/CollectionModal/CollectionModal";
import { mocked_allTrades } from "MOCK";

import { useGetMyItemsQuery } from "packages/graphql/generated";
import { INftCollection, INftItem } from "interfaces";
import { useAuth, useModalsState } from "hooks";

import { TradesModal } from "../enums";

import { TradesLayout } from "../components/TradesLayout/TradesLayout";
import { TradeList } from "../components/TradeList/TradeList";

const MyTrades: React.FC = () => {
  const { account } = useAuth();
  const { data } = useGetMyItemsQuery({ variables: { owner: account } });

  const [selectedNft, setSelectedNft] = useState<INftItem | null>(null);
  const [selectedCollection, setSelectedCollection] =
    useState<INftCollection | null>(null);

  const { openModal, isModalOpened, closeModals } =
    useModalsState<TradesModal>();

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

  return (
    <>
      <TradesLayout>
        <FlexiTitle>My trades</FlexiTitle>
        <TradeList
          list={mocked_allTrades ?? data?.itemsByOwnerAddress ?? []}
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
