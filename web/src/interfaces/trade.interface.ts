import { Maybe } from './maybe.type'
import { INftCollection, INftItem } from './nft.interface'

export interface ITrade {
  id: string
  initiatorAddress: string
  createdAt: number
  givings: IGiving
  receivings: IReceiving[]
}

interface IGiving {
  items: INftItem[]
}

export interface IReceivingsItem {
  item: Maybe<INftItem>
  collection: INftCollection
}

export interface IReceiving {
  id: string
  items: IReceivingsItem[]
}

interface Test {
  __typename?: 'Trade'
  id: string
  initiatorAddress: any
  createdAt: number
  givings: {
    __typename?: 'GivingsOffer'
    items: Array<{
      __typename?: 'GivingsOfferItem'
      item: {
        __typename?: 'CollectionItem'
        tokenId: any
        tokenAddress: any
        name?: string | null
        description?: string | null
        file?: string | null
        collection?: {
          __typename?: 'Collection'
          name?: string | null
          tokenAddress: any
        } | null
      }
    }>
  }
  receivings: Array<{
    __typename?: 'ReceivingsOffer'
    id: string
    items: Array<{
      __typename?: 'ReceivingsOfferItem'
      item?: {
        __typename?: 'CollectionItem'
        tokenId: any
        tokenAddress: any
        name?: string | null
        description?: string | null
        file?: string | null
        collection?: {
          __typename?: 'Collection'
          name?: string | null
          tokenAddress: any
        } | null
      } | null
      collection: {
        __typename?: 'Collection'
        tokenAddress: any
        name?: string | null
        symbol?: string | null
        logo?: string | null
        previewItems: Array<{
          __typename?: 'CollectionItem'
          file?: string | null
        }>
      }
    }>
  }>
}
