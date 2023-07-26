import React from 'react'
import { useChooseNftsStyles } from './ChooseNfts.style'

import { INftItem } from '@/interfaces'
import { arrDifference } from '@/utils'

import { SectionTitle } from '../Text/SectionTitle'
import { ChooseNftList } from '../ChooseNftList/ChooseNftList'

export interface ChooseNftsProps {
  nfts: INftItem[]
  onClickNft?: (item: INftItem) => void
  filterFrom?: INftItem[]
  title?: string
  onAnyOfCollectionClick?: (tokenId: Address) => void
}

export const ChooseNfts: React.FC<ChooseNftsProps> = ({ nfts, filterFrom, title = 'Your NFTs', ...props }) => {
  const classes = useChooseNftsStyles()
  const displayArr = filterFrom ? arrDifference(nfts, filterFrom, 'tokenId') : nfts

  return (
    <section className={classes.container}>
      <SectionTitle>{title}</SectionTitle>
      <ChooseNftList {...props} nfts={displayArr} />
    </section>
  )
}
