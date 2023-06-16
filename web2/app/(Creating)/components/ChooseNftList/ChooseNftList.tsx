import React from 'react'
import { useChooseNftListStyles } from './ChooseNftList.style'

import { List, ListItem } from '@mui/material'

import { INftItem } from '@/interfaces'

import { FlexiNft } from '@/components/FlexiNft/FlexiNft'
import { AnyOfCollectionNft } from '../AnyOfCollectionNft/AnyOfCollectionNft'

interface ChooseNftListProps {
  nfts: INftItem[]
  onClickNft?: (item: INftItem) => void
  isShowAnyOfCollection?: boolean
}

export const ChooseNftList: React.FC<ChooseNftListProps> = ({ nfts, onClickNft, isShowAnyOfCollection = true }) => {
  const classes = useChooseNftListStyles()
  return (
    <List className={classes.list}>
      {isShowAnyOfCollection && (
        <ListItem className={classes.listItem}>
          <AnyOfCollectionNft />
        </ListItem>
      )}
      {nfts.map(nft => (
        <ListItem key={nft.tokenId} className={classes.listItem}>
          <FlexiNft item={nft} clickable onClickNft={onClickNft} hoverEffect={'tick'} />
        </ListItem>
      ))}
    </List>
  )
}
