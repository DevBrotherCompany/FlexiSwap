'use client'
import{ useCallback, useEffect } from 'react'

import { makeStyles } from "@mui/styles";
import { Style } from "@/shared/variables";

import { INftItem } from '@/interfaces'

import { FlexiTitle } from '@/components/FlexiTitle/FlexiTitle'
import { FlexiInput } from '@/components/FlexiInput/FlexiInput'

import { useGetMyItemsLazyQuery } from '@/packages/graphql/generated'
import { useAppDispatch, useAppSelector } from '@/storage/hooks'
import { useAuth } from '@/hooks'
import { RouteName } from '@/shared/routes'

import { removeNftFromSelected, selectCreateTrade, selectNft } from './createTrade.slice'
import { mocked_Nfts } from '@/MOCK/creating'
import { mocked_items } from '@/MOCK/items'
import { useRouter } from 'next/navigation';
import { YourSelection } from '../components/YourSelection/YourSelection';
import { ChooseNfts } from '../components/ChooseNfts/ChooseNfts';

export const MAX_SELECTED_NFTS = 10

const useCreateTradeStyles = makeStyles(() => ({
  yourSelection: {
    borderRight: `1px solid ${Style.additionalBackground}`,
    paddingBottom: "60px",
  },
  title: {
    paddingTop: "34px",
  },
  chooseNft: {
    padding: "64px",
    width: "100%",
  },
}));

const CreateTrade: React.FC = () => {
  const classes = useCreateTradeStyles()

  const { account, moralisAccount } = useAuth()
  const [getMyItems, { data }] = useGetMyItemsLazyQuery()

  const { selectedNFTs } = useAppSelector(selectCreateTrade)
  const navigate = useRouter()
  const dispatch = useAppDispatch()

  const handleSelectNft = useCallback(
    (item: INftItem) => {
      if (selectedNFTs.length < MAX_SELECTED_NFTS) dispatch(selectNft(item))
    },
    [selectedNFTs]
  )

  const handleRemoveNft = useCallback((item: INftItem) => {
    dispatch(removeNftFromSelected(item))
  }, [])

  const handleCreateOffers = () => {
    navigate.push(RouteName.CreateOffers + `/${1}`)
  }

  const handleSearchPressed = (e: any) => {
    if (e.key === 'Enter') {
      getMyItems({ variables: { owner: account, nextPage: 1, tokenAddress: e.target.value } })
      // onSearchPress && onSearchPress(search)
    }
  }

  useEffect(() => {
    account && getMyItems({ variables: { owner: account } })
  }, [account])

  // if (!account) {
  //   return null;
  // }

  return (
    <>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs to trade</FlexiTitle>
        <YourSelection selected={selectedNFTs} onClickNft={handleRemoveNft} onBtnClick={handleCreateOffers} />
      </main>
      <main className={classes.chooseNft}>
        <FlexiInput placeholder={'Search by NFTs, collection name...'} onKeyDown={handleSearchPressed} />
        <ChooseNfts nfts={mocked_Nfts} onClickNft={handleSelectNft} filterFrom={selectedNFTs} isShowAnyOfCollection={false} />
        {!account && <h1 className="text-secondaryContrast">Please connect wallet to choose your NFTs</h1>}
      </main>
    </>
  )
}

export default CreateTrade;
