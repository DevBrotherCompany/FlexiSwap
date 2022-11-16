import React, { useState } from "react";

import { useModalsState } from "hooks";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";
import { NftModal } from "shared/NftModal/NftModal";
import { CollectionModal } from "shared/CollectionModal/CollectionModal";

import { INftCollection, INftItem } from "interfaces";
import { TradesModal } from "../enums";

import { TradesLayout } from "../components/TradesLayout/TradesLayout";
import { TradeList } from "../components/TradeList/TradeList";

import {
  useGetAllTradesQuery,
  useSearchItemsCollectionLazyQuery,
} from "packages/graphql/generated";

const AllTrades: React.FC = () => {
  const { data } = useGetAllTradesQuery();
  const [searchCollection, { data: dataCollection }] =
    useSearchItemsCollectionLazyQuery();
  // const [searchItems, { data: searchData }] = useSearchItemsLazyQuery()

  const { openModal, isModalOpened, closeModals } =
    useModalsState<TradesModal>();

  const [selectedNft, setSelectedNft] = useState<INftItem | null>(null);
  const [selectedCollection, setSelectedCollection] =
    useState<INftCollection | null>(null);
  // const [search, setSearch] = useState('')
  // const debouncedSearch = useDebounce(search, 100)

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

  // const handleSearchPress = (search: string) => {
  //   searchItems({ variables: { search, nextPage: 1 } })
  // }

  // useEffect(() => {
  //   searchItems({ variables: { search: debouncedSearch } })
  // }, [debouncedSearch])

  // console.log('===SearchItems -> searchData===', searchData)
  // console.log('===Get all trades -> data===', data)

  // const fromLocalStorage = storage.get(StorageKey.NftTrades) ?? []

  // const mocked_displayItems = [...fromLocalStorage, ...mocked_allTrades]
  return (
    <>
      <TradesLayout>
        <FlexiTitle>All trades</FlexiTitle>
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

export default AllTrades;
