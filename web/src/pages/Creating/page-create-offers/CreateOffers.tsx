import React, { useEffect, useState } from 'react'
import { useCreateOffersStyles } from './CreateOffers.style'

import { useNavigate, useParams } from 'react-router-dom'

import { RouteName } from 'shared/routes'
import { FlexiTitle } from 'components/FlexiTitle/FlexiTitle'
import { FlexiInput } from 'components/FlexiInput/FlexiInput'

import { useSearchItemsLazyQuery } from 'packages/graphql/generated'
import { useDebounce } from 'hooks'
import { useAppDispatch, useAppSelector } from 'storage/hooks'
import { INftItem } from 'interfaces'

import { YourSelection } from '../components/YourSelection/YourSelection'
import { ChooseNfts } from '../components/ChooseNfts/ChooseNfts'

import { OffersLayout } from './OffersLayout/OffersLayout'
import { CreateOffersParams } from './CreateOffersParant'
import { addNftForOffer, removeNftFromOffer, selectCreateOffer } from './createOffer.slice'
import { mocked_items } from 'MOCK/items'

const CreateOffers: React.FC = () => {
  const classes = useCreateOffersStyles()

  const [getNfts, { data }] = useSearchItemsLazyQuery()

  const navigate = useNavigate()
  const { number } = useParams<CreateOffersParams>()
  const { offers } = useAppSelector(selectCreateOffer)
  const dispatch = useAppDispatch()

  const [search, setSearch] = useState('')
  const debouncedSearch = useDebounce(search)

  const currentOffer = offers.find(o => o.id === Number(number))

  const handleAddNftToOffer = (item: INftItem) => {
    dispatch(
      addNftForOffer({
        item,
        id: Number(number),
      })
    )
  }

  const handleRemoveNft = (item: INftItem) => {
    dispatch(removeNftFromOffer({ id: Number(number), item }))
  }

  const handleAddOffer = () => {
    navigate(RouteName.CreateOffers + '/' + (Number(number) + 1))
  }

  useEffect(() => {
    getNfts({ variables: { search: debouncedSearch } })
  }, [debouncedSearch])

  useEffect(() => {
    // TODO validate current page
    // const id = Number(number);
    // if (currentOffer && currentOffer.id > id + 1) {
    //   navigate(RouteName.CreateOffers + `/${id + 1}`);
    // } else if (id > 1 && offers.length < id) {
    //   navigate(RouteName.CreateOffers + `/${1}`);
    // }
  }, [number])

  return (
    <OffersLayout>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs for offer</FlexiTitle>
        <YourSelection
          selected={currentOffer?.selected ?? []}
          onClickNft={handleRemoveNft}
          onBtnClick={handleAddOffer}
          labelBtn={'Add offer'}
          // disabledBtn={offers.length > 6}
        />
      </main>
      <main className={classes.chooseNft}>
        <FlexiInput onChange={e => setSearch(e.target.value)} placeholder={'Search by NFTs, collection name...'} />
        <ChooseNfts nfts={mocked_items ?? data?.searchItems.items ?? []} title={'All NFTs'} onClickNft={handleAddNftToOffer} filterFrom={currentOffer?.selected} />
      </main>
    </OffersLayout>
  )
}

export default CreateOffers
