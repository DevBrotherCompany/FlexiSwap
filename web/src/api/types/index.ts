export type Bytes = string
export type BigInt = string
export type ID = string
export type Int = number

interface CollectionItem {
  id: ID
  tokenAddress: Bytes
  tokenId: BigInt
  ownerAddress: Bytes
  name?: string
  description?: string
  file: string
  collection: Collection
}

interface CollectionItemPaginated {
  cursor: string
  nodes: CollectionItem[]
}

interface Collection {
  id: ID
  tokenAddress: Bytes
  name: string
  symbol: string
  description: string
  previewItems: CollectionItem[]
  items: CollectionItemPaginated
}

interface GivingsOfferItem {
  id: ID
  tokenAddress: Bytes
  tokenId: BigInt
  offer: GivingsOffer
  item: CollectionItem
}

interface GivingsOffer {
  id: ID
  items: GivingsOfferItem[]
  trade: Trade
}

interface ReceivingsOfferItem {
  id: ID
  tokenAddress: Bytes
  tokenId?: BigInt
  offer: ReceivingsOffer
  item: CollectionItem
}

interface ReceivingsOffer {
  id: ID
  items: ReceivingsOfferItem[]
  trade: Trade
}

interface CounterOfferItem {
  id: ID
  tokenAddress: Bytes
  tokenId: BigInt
  offer: CounterOffer
  item: CollectionItem
}

interface CounterOffer {
  id: ID
  createdAt: Int
  offererAddress: Bytes
  items: [CounterOfferItem]
  trade: Trade
}

interface Trade {
  id: ID
  createdAt: Int
  finishedAt?: Int
  initiatorAddress: Bytes
  givings: GivingsOffer
  receivings: ReceivingsOffer[]
  counterOffers: CounterOffer[]
  acceptedReceivingsOffer?: ReceivingsOffer
  acceptedCounterOffer?: CounterOffer
  counterAgentAddress?: Bytes
}

// interface Query {
//     trades(first: Int!): [Trade!]!
//     collections(search: String!): [Collection!]!
// }
