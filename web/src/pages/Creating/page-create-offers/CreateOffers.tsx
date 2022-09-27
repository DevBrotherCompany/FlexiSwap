import React, { KeyboardEvent, useEffect, useState } from 'react'
import { useCreateOffersStyles } from './CreateOffers.style'

import { useNavigate, useParams } from 'react-router-dom'

import { RouteName } from 'shared/routes'
import { FlexiTitle } from 'components/FlexiTitle/FlexiTitle'
import { FlexiInput } from 'components/FlexiInput/FlexiInput'

import { useSearchItemsLazyQuery } from 'packages/graphql/generated'
import { useAppDispatch, useAppSelector } from 'storage/hooks'
import { INftItem } from 'interfaces'

import { YourSelection } from '../components/YourSelection/YourSelection'
import { ChooseNfts } from '../components/ChooseNfts/ChooseNfts'

import { OffersLayout } from './OffersLayout/OffersLayout'
import { CreateOffersParams } from './CreateOffersParant'
import { addNftForOffer, removeNftFromOffer, selectCreateOffer } from './createOffer.slice'

const CreateOffers: React.FC = () => {
  const classes = useCreateOffersStyles()

  const [getNfts, { data }] = useSearchItemsLazyQuery()
  console.log('===data===', data)

  const navigate = useNavigate()
  const { id } = useParams<CreateOffersParams>()
  const { offers } = useAppSelector(selectCreateOffer)
  const dispatch = useAppDispatch()

  // const [search, setSearch] = useState('')
  // const debouncedSearch = useDebounce(search)

  const currentOffer = offers.find(o => o.id === Number(id))

  const handleAddNftToOffer = (item: INftItem) => {
    dispatch(
      addNftForOffer({
        item,
        id: Number(id),
      })
    )
  }

  const handleRemoveNft = (item: INftItem) => {
    dispatch(removeNftFromOffer({ id: Number(id), item }))
  }

  const handleAddOffer = () => {
    navigate(RouteName.CreateOffers + '/' + (Number(id) + 1))
  }

  const handleSearchPressed = (e: any) => {
    if (e.key === 'Enter') {
      getNfts({ variables: { search: e.target.value, nextPage: 1 } })
      // onSearchPress && onSearchPress(search)
    }
  }

  useEffect(() => {
    getNfts({ variables: { search: '', nextPage: 1 } })
  }, [])

  // console.log('===SearchItems -> data===', data)
  useEffect(() => {
    // TODO validate current page
    // const id = Number(number);
    // if (currentOffer && currentOffer.id > id + 1) {
    //   navigate(RouteName.CreateOffers + `/${id + 1}`);
    // } else if (id > 1 && offers.length < id) {
    //   navigate(RouteName.CreateOffers + `/${1}`);
    // }
  }, [id])

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
        <FlexiInput onKeyDown={handleSearchPressed} placeholder={'Search by NFTs, collection name (Press enter to search)...'} />
        <ChooseNfts nfts={data?.searchItems.items ?? []} title={'All NFTs'} onClickNft={handleAddNftToOffer} filterFrom={currentOffer?.selected} />
      </main>
    </OffersLayout>
  )
}

export default CreateOffers
