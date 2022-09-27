import React, { useCallback, useEffect } from 'react'
import { useCreateTradeStyles } from './CreateTrade.style'

import { useNavigate } from 'react-router-dom'

import { INftItem } from 'interfaces'

import { FlexiTitle } from 'components/FlexiTitle/FlexiTitle'
import { FlexiInput } from 'components/FlexiInput/FlexiInput'

import { YourSelection } from 'pages/Creating/components/YourSelection/YourSelection'
import { ChooseNfts } from 'pages/Creating/components/ChooseNfts/ChooseNfts'

import { useGetMyItemsLazyQuery } from 'packages/graphql/generated'
import { useAppDispatch, useAppSelector } from 'storage/hooks'
import { useAuth } from 'hooks'
import { RouteName } from 'shared/routes'

import { TradeLayout } from './TradeLayout/TradeLayout'
import { removeNftFromSelected, selectCreateTrade, selectNft } from './createTrade.slice'
import { mocked_Nfts } from 'MOCK/creating'
import { mocked_items } from 'MOCK/items'

export const MAX_SELECTED_NFTS = 10

const CreateTrade: React.FC = () => {
  const classes = useCreateTradeStyles()

  const { account } = useAuth()
  const [getMyItems, { data }] = useGetMyItemsLazyQuery()

  const { selectedNFTs } = useAppSelector(selectCreateTrade)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleSelectNft = useCallback(
    (item: INftItem) => {
      if (selectedNFTs.length < MAX_SELECTED_NFTS) dispatch(selectNft(item))
    },
    [selectedNFTs]
  )

  console.log('===GetMyItems -> data===', data)

  const handleRemoveNft = useCallback((item: INftItem) => {
    dispatch(removeNftFromSelected(item))
  }, [])

  const handleCreateOffers = () => {
    navigate(RouteName.CreateOffers + `/${1}`)
  }

  useEffect(() => {
    account && getMyItems({ variables: { owner: account } })
  }, [account])

  // if (!account) {
  //   return null;
  // }

  return (
    <TradeLayout>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs to trade</FlexiTitle>
        <YourSelection selected={selectedNFTs} onClickNft={handleRemoveNft} onBtnClick={handleCreateOffers} />
      </main>
      <main className={classes.chooseNft}>
        <FlexiInput placeholder={'Search by NFTs, collection name...'} />
        <ChooseNfts nfts={mocked_items.slice(0, 3) ?? data?.itemsByOwnerAddress.items ?? []} onClickNft={handleSelectNft} filterFrom={selectedNFTs} isShowAnyOfCollection={false} />
      </main>
    </TradeLayout>
  )
}

export default CreateTrade
