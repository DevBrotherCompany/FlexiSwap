import React, { useCallback, useEffect } from "react";
import { useCreateTradeStyles } from "./CreateTrade.style";

import { useNavigate } from "react-router-dom";

import { INftItem } from "interfaces";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";
import { FlexiInput } from "components/FlexiInput/FlexiInput";

import { YourSelection } from "pages/Creating/components/YourSelection/YourSelection";
import { ChooseNfts } from "pages/Creating/components/ChooseNfts/ChooseNfts";

import { useGetMyItemsLazyQuery } from "packages/graphql/generated";
import { useAppDispatch, useAppSelector } from "storage/hooks";
import { useAuth } from "hooks";

import { TradeLayout } from "./TradeLayout/TradeLayout";
import {
  removeNftFromSelected,
  selectCreateTrade,
  selectNft,
} from "./createTrade.slice";
import { RouteName } from "shared/routes";

const mocked_Nfts: INftItem[] = [
  {
    tokenId: "tk 1",
    tokenAddress: "address 1",
    collection: { name: "col name", tokenAddress: "col address 1" },
    name: "item name",
    file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
    description: "descr",
  },
  {
    tokenId: "tk 2",
    tokenAddress: "address 1",
    collection: { name: "col name", tokenAddress: "col address 1" },
    name: "item name",
    file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
    description: "descr",
  },
  {
    tokenId: "tk 3",
    tokenAddress: "address 1",
    collection: { name: "col name", tokenAddress: "col address 1" },
    name: "item name",
    file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
    description: "descr",
  },
  {
    tokenId: "tk 4",
    tokenAddress: "address 1",
    collection: { name: "col name", tokenAddress: "col address 1" },
    name: "item name",
    file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
    description: "descr",
  },
  {
    tokenId: "tk 5",
    tokenAddress: "address 1",
    collection: { name: "col name", tokenAddress: "col address 1" },
    name: "item name",
    file: "https://img.kapital.kz/2wyYn-W4r_M/czM6Ly9rYXBpdGFsLXN0YXRpYy9pbWcvNy9kLzcvMC8zL2I2YjdkNTUzOTkwOGQ3ZDU4ZDg5OWM1YmVhMy5qcGc",
    description: "descr",
  },
];

export const MAX_SELECTED_NFTS = 10;

const CreateTrade: React.FC = () => {
  const classes = useCreateTradeStyles();

  const { account } = useAuth();
  const [getMyItems, { data }] = useGetMyItemsLazyQuery();

  const { selectedNFTs } = useAppSelector(selectCreateTrade);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const handleSelectNft = useCallback(
    (item: INftItem) => {
      if (selectedNFTs.length < MAX_SELECTED_NFTS) dispatch(selectNft(item));
    },
    [selectedNFTs]
  );

  const handleRemoveNft = useCallback((item: INftItem) => {
    dispatch(removeNftFromSelected(item));
  }, []);

  const handleCreateOffers = () => {
    navigate(RouteName.CreateOffers + `/${1}`);
  };

  useEffect(() => {
    account && getMyItems({ variables: { owner: account } });
  }, [account]);

  // if (!account) {
  //   return null;
  // }

  return (
    <TradeLayout>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs to trade</FlexiTitle>
        <YourSelection
          selected={selectedNFTs}
          onClickNft={handleRemoveNft}
          onBtnClick={handleCreateOffers}
        />
      </main>
      <main className={classes.chooseNft}>
        <FlexiInput placeholder={"Search by NFTs, collection name..."} />
        <ChooseNfts
          nfts={mocked_Nfts ?? data?.itemsByOwnerAddress.items ?? mocked_Nfts}
          onClickNft={handleSelectNft}
          filterFrom={selectedNFTs}
        />
      </main>
    </TradeLayout>
  );
};

export default CreateTrade;
