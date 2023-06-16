import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  BigDecimal: any;
  BigInt: any;
  Bytes: any;
};

export type BlockChangedFilter = {
  number_gte: Scalars['Int'];
};

export type Block_Height = {
  hash?: InputMaybe<Scalars['Bytes']>;
  number?: InputMaybe<Scalars['Int']>;
  number_gte?: InputMaybe<Scalars['Int']>;
};

export type Collection = {
  __typename?: 'Collection';
  logo?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  previewItems?: Maybe<Array<CollectionItem>>;
  symbol?: Maybe<Scalars['String']>;
  tokenAddress: Scalars['Bytes'];
};

export type CollectionItem = {
  __typename?: 'CollectionItem';
  collection?: Maybe<Collection>;
  description?: Maybe<Scalars['String']>;
  file?: Maybe<Scalars['String']>;
  name?: Maybe<Scalars['String']>;
  tokenAddress: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
};

export type CollectionItemsPagination = {
  __typename?: 'CollectionItemsPagination';
  items: Array<CollectionItem>;
  nextPage?: Maybe<Scalars['Int']>;
};

export type CounterOffer = {
  __typename?: 'CounterOffer';
  createdAt: Scalars['Int'];
  id: Scalars['ID'];
  items: Array<CounterOfferItem>;
  offererAddress: Scalars['Bytes'];
  trade: Trade;
};


export type CounterOfferItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CounterOfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CounterOfferItem_Filter>;
};

export type CounterOfferItem = {
  __typename?: 'CounterOfferItem';
  collection: Collection;
  id: Scalars['ID'];
  item: CollectionItem;
  offer: CounterOffer;
  tokenAddress: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
};

export type CounterOfferItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  offer?: InputMaybe<Scalars['String']>;
  offer_?: InputMaybe<CounterOffer_Filter>;
  offer_contains?: InputMaybe<Scalars['String']>;
  offer_contains_nocase?: InputMaybe<Scalars['String']>;
  offer_ends_with?: InputMaybe<Scalars['String']>;
  offer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  offer_gt?: InputMaybe<Scalars['String']>;
  offer_gte?: InputMaybe<Scalars['String']>;
  offer_in?: InputMaybe<Array<Scalars['String']>>;
  offer_lt?: InputMaybe<Scalars['String']>;
  offer_lte?: InputMaybe<Scalars['String']>;
  offer_not?: InputMaybe<Scalars['String']>;
  offer_not_contains?: InputMaybe<Scalars['String']>;
  offer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  offer_not_ends_with?: InputMaybe<Scalars['String']>;
  offer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  offer_not_in?: InputMaybe<Array<Scalars['String']>>;
  offer_not_starts_with?: InputMaybe<Scalars['String']>;
  offer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offer_starts_with?: InputMaybe<Scalars['String']>;
  offer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum CounterOfferItem_OrderBy {
  Id = 'id',
  Offer = 'offer',
  TokenAddress = 'tokenAddress',
  TokenId = 'tokenId'
}

export type CounterOffer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  items_?: InputMaybe<CounterOfferItem_Filter>;
  offererAddress?: InputMaybe<Scalars['Bytes']>;
  offererAddress_contains?: InputMaybe<Scalars['Bytes']>;
  offererAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  offererAddress_not?: InputMaybe<Scalars['Bytes']>;
  offererAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  offererAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  trade?: InputMaybe<Scalars['String']>;
  trade_?: InputMaybe<Trade_Filter>;
  trade_contains?: InputMaybe<Scalars['String']>;
  trade_contains_nocase?: InputMaybe<Scalars['String']>;
  trade_ends_with?: InputMaybe<Scalars['String']>;
  trade_ends_with_nocase?: InputMaybe<Scalars['String']>;
  trade_gt?: InputMaybe<Scalars['String']>;
  trade_gte?: InputMaybe<Scalars['String']>;
  trade_in?: InputMaybe<Array<Scalars['String']>>;
  trade_lt?: InputMaybe<Scalars['String']>;
  trade_lte?: InputMaybe<Scalars['String']>;
  trade_not?: InputMaybe<Scalars['String']>;
  trade_not_contains?: InputMaybe<Scalars['String']>;
  trade_not_contains_nocase?: InputMaybe<Scalars['String']>;
  trade_not_ends_with?: InputMaybe<Scalars['String']>;
  trade_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  trade_not_in?: InputMaybe<Array<Scalars['String']>>;
  trade_not_starts_with?: InputMaybe<Scalars['String']>;
  trade_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  trade_starts_with?: InputMaybe<Scalars['String']>;
  trade_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum CounterOffer_OrderBy {
  CreatedAt = 'createdAt',
  Id = 'id',
  Items = 'items',
  OffererAddress = 'offererAddress',
  Trade = 'trade'
}

export type GivingsOffer = {
  __typename?: 'GivingsOffer';
  id: Scalars['ID'];
  items: Array<GivingsOfferItem>;
  trade: Trade;
};


export type GivingsOfferItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GivingsOfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<GivingsOfferItem_Filter>;
};

export type GivingsOfferItem = {
  __typename?: 'GivingsOfferItem';
  collection: Collection;
  id: Scalars['ID'];
  item: CollectionItem;
  offer: GivingsOffer;
  tokenAddress: Scalars['Bytes'];
  tokenId: Scalars['BigInt'];
};

export type GivingsOfferItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  offer?: InputMaybe<Scalars['String']>;
  offer_?: InputMaybe<GivingsOffer_Filter>;
  offer_contains?: InputMaybe<Scalars['String']>;
  offer_contains_nocase?: InputMaybe<Scalars['String']>;
  offer_ends_with?: InputMaybe<Scalars['String']>;
  offer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  offer_gt?: InputMaybe<Scalars['String']>;
  offer_gte?: InputMaybe<Scalars['String']>;
  offer_in?: InputMaybe<Array<Scalars['String']>>;
  offer_lt?: InputMaybe<Scalars['String']>;
  offer_lte?: InputMaybe<Scalars['String']>;
  offer_not?: InputMaybe<Scalars['String']>;
  offer_not_contains?: InputMaybe<Scalars['String']>;
  offer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  offer_not_ends_with?: InputMaybe<Scalars['String']>;
  offer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  offer_not_in?: InputMaybe<Array<Scalars['String']>>;
  offer_not_starts_with?: InputMaybe<Scalars['String']>;
  offer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offer_starts_with?: InputMaybe<Scalars['String']>;
  offer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum GivingsOfferItem_OrderBy {
  Id = 'id',
  Offer = 'offer',
  TokenAddress = 'tokenAddress',
  TokenId = 'tokenId'
}

export type GivingsOffer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  items_?: InputMaybe<GivingsOfferItem_Filter>;
  trade?: InputMaybe<Scalars['String']>;
  trade_?: InputMaybe<Trade_Filter>;
  trade_contains?: InputMaybe<Scalars['String']>;
  trade_contains_nocase?: InputMaybe<Scalars['String']>;
  trade_ends_with?: InputMaybe<Scalars['String']>;
  trade_ends_with_nocase?: InputMaybe<Scalars['String']>;
  trade_gt?: InputMaybe<Scalars['String']>;
  trade_gte?: InputMaybe<Scalars['String']>;
  trade_in?: InputMaybe<Array<Scalars['String']>>;
  trade_lt?: InputMaybe<Scalars['String']>;
  trade_lte?: InputMaybe<Scalars['String']>;
  trade_not?: InputMaybe<Scalars['String']>;
  trade_not_contains?: InputMaybe<Scalars['String']>;
  trade_not_contains_nocase?: InputMaybe<Scalars['String']>;
  trade_not_ends_with?: InputMaybe<Scalars['String']>;
  trade_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  trade_not_in?: InputMaybe<Array<Scalars['String']>>;
  trade_not_starts_with?: InputMaybe<Scalars['String']>;
  trade_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  trade_starts_with?: InputMaybe<Scalars['String']>;
  trade_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum GivingsOffer_OrderBy {
  Id = 'id',
  Items = 'items',
  Trade = 'trade'
}

export type ItemsByOwnerAddressInput = {
  nextPage?: InputMaybe<Scalars['Int']>;
  ownerAddress: Scalars['Bytes'];
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
};

/** Defines the order direction, either ascending or descending */
export enum OrderDirection {
  Asc = 'asc',
  Desc = 'desc'
}

export type Query = {
  __typename?: 'Query';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  counterOffer?: Maybe<CounterOffer>;
  counterOfferItem?: Maybe<CounterOfferItem>;
  counterOfferItems: Array<CounterOfferItem>;
  counterOffers: Array<CounterOffer>;
  getCollection?: Maybe<Collection>;
  givingsOffer?: Maybe<GivingsOffer>;
  givingsOfferItem?: Maybe<GivingsOfferItem>;
  givingsOfferItems: Array<GivingsOfferItem>;
  givingsOffers: Array<GivingsOffer>;
  itemsByOwnerAddress: CollectionItemsPagination;
  receivingsOffer?: Maybe<ReceivingsOffer>;
  receivingsOfferItem?: Maybe<ReceivingsOfferItem>;
  receivingsOfferItems: Array<ReceivingsOfferItem>;
  receivingsOffers: Array<ReceivingsOffer>;
  searchItems: CollectionItemsPagination;
  trade?: Maybe<Trade>;
  trades: Array<Trade>;
};


export type Query_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type QueryCounterOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCounterOfferItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryCounterOfferItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CounterOfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CounterOfferItem_Filter>;
};


export type QueryCounterOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CounterOffer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CounterOffer_Filter>;
};


export type QueryGetCollectionArgs = {
  tokenAddress: Scalars['String'];
};


export type QueryGivingsOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGivingsOfferItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryGivingsOfferItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GivingsOfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GivingsOfferItem_Filter>;
};


export type QueryGivingsOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GivingsOffer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GivingsOffer_Filter>;
};


export type QueryItemsByOwnerAddressArgs = {
  input: ItemsByOwnerAddressInput;
};


export type QueryReceivingsOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReceivingsOfferItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryReceivingsOfferItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReceivingsOfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReceivingsOfferItem_Filter>;
};


export type QueryReceivingsOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReceivingsOffer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReceivingsOffer_Filter>;
};


export type QuerySearchItemsArgs = {
  input: SearchItemsInput;
};


export type QueryTradeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type QueryTradesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trade_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trade_Filter>;
};

export type ReceivingsOffer = {
  __typename?: 'ReceivingsOffer';
  id: Scalars['ID'];
  items: Array<ReceivingsOfferItem>;
  trade: Trade;
};


export type ReceivingsOfferItemsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReceivingsOfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReceivingsOfferItem_Filter>;
};

export type ReceivingsOfferItem = {
  __typename?: 'ReceivingsOfferItem';
  collection: Collection;
  id: Scalars['ID'];
  item?: Maybe<CollectionItem>;
  offer: ReceivingsOffer;
  tokenAddress: Scalars['Bytes'];
  tokenId?: Maybe<Scalars['BigInt']>;
};

export type ReceivingsOfferItem_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  offer?: InputMaybe<Scalars['String']>;
  offer_?: InputMaybe<ReceivingsOffer_Filter>;
  offer_contains?: InputMaybe<Scalars['String']>;
  offer_contains_nocase?: InputMaybe<Scalars['String']>;
  offer_ends_with?: InputMaybe<Scalars['String']>;
  offer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  offer_gt?: InputMaybe<Scalars['String']>;
  offer_gte?: InputMaybe<Scalars['String']>;
  offer_in?: InputMaybe<Array<Scalars['String']>>;
  offer_lt?: InputMaybe<Scalars['String']>;
  offer_lte?: InputMaybe<Scalars['String']>;
  offer_not?: InputMaybe<Scalars['String']>;
  offer_not_contains?: InputMaybe<Scalars['String']>;
  offer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  offer_not_ends_with?: InputMaybe<Scalars['String']>;
  offer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  offer_not_in?: InputMaybe<Array<Scalars['String']>>;
  offer_not_starts_with?: InputMaybe<Scalars['String']>;
  offer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  offer_starts_with?: InputMaybe<Scalars['String']>;
  offer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenAddress_not?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  tokenAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  tokenId?: InputMaybe<Scalars['BigInt']>;
  tokenId_gt?: InputMaybe<Scalars['BigInt']>;
  tokenId_gte?: InputMaybe<Scalars['BigInt']>;
  tokenId_in?: InputMaybe<Array<Scalars['BigInt']>>;
  tokenId_lt?: InputMaybe<Scalars['BigInt']>;
  tokenId_lte?: InputMaybe<Scalars['BigInt']>;
  tokenId_not?: InputMaybe<Scalars['BigInt']>;
  tokenId_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
};

export enum ReceivingsOfferItem_OrderBy {
  Id = 'id',
  Offer = 'offer',
  TokenAddress = 'tokenAddress',
  TokenId = 'tokenId'
}

export type ReceivingsOffer_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  items_?: InputMaybe<ReceivingsOfferItem_Filter>;
  trade?: InputMaybe<Scalars['String']>;
  trade_?: InputMaybe<Trade_Filter>;
  trade_contains?: InputMaybe<Scalars['String']>;
  trade_contains_nocase?: InputMaybe<Scalars['String']>;
  trade_ends_with?: InputMaybe<Scalars['String']>;
  trade_ends_with_nocase?: InputMaybe<Scalars['String']>;
  trade_gt?: InputMaybe<Scalars['String']>;
  trade_gte?: InputMaybe<Scalars['String']>;
  trade_in?: InputMaybe<Array<Scalars['String']>>;
  trade_lt?: InputMaybe<Scalars['String']>;
  trade_lte?: InputMaybe<Scalars['String']>;
  trade_not?: InputMaybe<Scalars['String']>;
  trade_not_contains?: InputMaybe<Scalars['String']>;
  trade_not_contains_nocase?: InputMaybe<Scalars['String']>;
  trade_not_ends_with?: InputMaybe<Scalars['String']>;
  trade_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  trade_not_in?: InputMaybe<Array<Scalars['String']>>;
  trade_not_starts_with?: InputMaybe<Scalars['String']>;
  trade_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  trade_starts_with?: InputMaybe<Scalars['String']>;
  trade_starts_with_nocase?: InputMaybe<Scalars['String']>;
};

export enum ReceivingsOffer_OrderBy {
  Id = 'id',
  Items = 'items',
  Trade = 'trade'
}

export type SearchItemsInput = {
  nextPage?: InputMaybe<Scalars['Int']>;
  search: Scalars['String'];
};

export type Subscription = {
  __typename?: 'Subscription';
  /** Access to subgraph metadata */
  _meta?: Maybe<_Meta_>;
  counterOffer?: Maybe<CounterOffer>;
  counterOfferItem?: Maybe<CounterOfferItem>;
  counterOfferItems: Array<CounterOfferItem>;
  counterOffers: Array<CounterOffer>;
  givingsOffer?: Maybe<GivingsOffer>;
  givingsOfferItem?: Maybe<GivingsOfferItem>;
  givingsOfferItems: Array<GivingsOfferItem>;
  givingsOffers: Array<GivingsOffer>;
  receivingsOffer?: Maybe<ReceivingsOffer>;
  receivingsOfferItem?: Maybe<ReceivingsOfferItem>;
  receivingsOfferItems: Array<ReceivingsOfferItem>;
  receivingsOffers: Array<ReceivingsOffer>;
  trade?: Maybe<Trade>;
  trades: Array<Trade>;
};


export type Subscription_MetaArgs = {
  block?: InputMaybe<Block_Height>;
};


export type SubscriptionCounterOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCounterOfferItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionCounterOfferItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CounterOfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CounterOfferItem_Filter>;
};


export type SubscriptionCounterOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CounterOffer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<CounterOffer_Filter>;
};


export type SubscriptionGivingsOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGivingsOfferItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionGivingsOfferItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GivingsOfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GivingsOfferItem_Filter>;
};


export type SubscriptionGivingsOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<GivingsOffer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<GivingsOffer_Filter>;
};


export type SubscriptionReceivingsOfferArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReceivingsOfferItemArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionReceivingsOfferItemsArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReceivingsOfferItem_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReceivingsOfferItem_Filter>;
};


export type SubscriptionReceivingsOffersArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReceivingsOffer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<ReceivingsOffer_Filter>;
};


export type SubscriptionTradeArgs = {
  block?: InputMaybe<Block_Height>;
  id: Scalars['ID'];
  subgraphError?: _SubgraphErrorPolicy_;
};


export type SubscriptionTradesArgs = {
  block?: InputMaybe<Block_Height>;
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<Trade_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  subgraphError?: _SubgraphErrorPolicy_;
  where?: InputMaybe<Trade_Filter>;
};

export type Trade = {
  __typename?: 'Trade';
  acceptedCounterOffer?: Maybe<CounterOffer>;
  acceptedReceivingsOffer?: Maybe<ReceivingsOffer>;
  counterAgentAddress?: Maybe<Scalars['Bytes']>;
  counterOffers: Array<CounterOffer>;
  createdAt: Scalars['Int'];
  finishedAt?: Maybe<Scalars['Int']>;
  givings: GivingsOffer;
  id: Scalars['ID'];
  initiatorAddress: Scalars['Bytes'];
  receivings: Array<ReceivingsOffer>;
};


export type TradeCounterOffersArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<CounterOffer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<CounterOffer_Filter>;
};


export type TradeReceivingsArgs = {
  first?: InputMaybe<Scalars['Int']>;
  orderBy?: InputMaybe<ReceivingsOffer_OrderBy>;
  orderDirection?: InputMaybe<OrderDirection>;
  skip?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<ReceivingsOffer_Filter>;
};

export type Trade_Filter = {
  /** Filter for the block changed event. */
  _change_block?: InputMaybe<BlockChangedFilter>;
  acceptedCounterOffer?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_?: InputMaybe<CounterOffer_Filter>;
  acceptedCounterOffer_contains?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_contains_nocase?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_ends_with?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_gt?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_gte?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_in?: InputMaybe<Array<Scalars['String']>>;
  acceptedCounterOffer_lt?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_lte?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_not?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_not_contains?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_not_ends_with?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_not_in?: InputMaybe<Array<Scalars['String']>>;
  acceptedCounterOffer_not_starts_with?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_starts_with?: InputMaybe<Scalars['String']>;
  acceptedCounterOffer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_?: InputMaybe<ReceivingsOffer_Filter>;
  acceptedReceivingsOffer_contains?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_contains_nocase?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_ends_with?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_ends_with_nocase?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_gt?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_gte?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_in?: InputMaybe<Array<Scalars['String']>>;
  acceptedReceivingsOffer_lt?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_lte?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_not?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_not_contains?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_not_contains_nocase?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_not_ends_with?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_not_in?: InputMaybe<Array<Scalars['String']>>;
  acceptedReceivingsOffer_not_starts_with?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_starts_with?: InputMaybe<Scalars['String']>;
  acceptedReceivingsOffer_starts_with_nocase?: InputMaybe<Scalars['String']>;
  counterAgentAddress?: InputMaybe<Scalars['Bytes']>;
  counterAgentAddress_contains?: InputMaybe<Scalars['Bytes']>;
  counterAgentAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  counterAgentAddress_not?: InputMaybe<Scalars['Bytes']>;
  counterAgentAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  counterAgentAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  counterOffers_?: InputMaybe<CounterOffer_Filter>;
  createdAt?: InputMaybe<Scalars['Int']>;
  createdAt_gt?: InputMaybe<Scalars['Int']>;
  createdAt_gte?: InputMaybe<Scalars['Int']>;
  createdAt_in?: InputMaybe<Array<Scalars['Int']>>;
  createdAt_lt?: InputMaybe<Scalars['Int']>;
  createdAt_lte?: InputMaybe<Scalars['Int']>;
  createdAt_not?: InputMaybe<Scalars['Int']>;
  createdAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  finishedAt?: InputMaybe<Scalars['Int']>;
  finishedAt_gt?: InputMaybe<Scalars['Int']>;
  finishedAt_gte?: InputMaybe<Scalars['Int']>;
  finishedAt_in?: InputMaybe<Array<Scalars['Int']>>;
  finishedAt_lt?: InputMaybe<Scalars['Int']>;
  finishedAt_lte?: InputMaybe<Scalars['Int']>;
  finishedAt_not?: InputMaybe<Scalars['Int']>;
  finishedAt_not_in?: InputMaybe<Array<Scalars['Int']>>;
  givings_?: InputMaybe<GivingsOffer_Filter>;
  id?: InputMaybe<Scalars['ID']>;
  id_gt?: InputMaybe<Scalars['ID']>;
  id_gte?: InputMaybe<Scalars['ID']>;
  id_in?: InputMaybe<Array<Scalars['ID']>>;
  id_lt?: InputMaybe<Scalars['ID']>;
  id_lte?: InputMaybe<Scalars['ID']>;
  id_not?: InputMaybe<Scalars['ID']>;
  id_not_in?: InputMaybe<Array<Scalars['ID']>>;
  initiatorAddress?: InputMaybe<Scalars['Bytes']>;
  initiatorAddress_contains?: InputMaybe<Scalars['Bytes']>;
  initiatorAddress_in?: InputMaybe<Array<Scalars['Bytes']>>;
  initiatorAddress_not?: InputMaybe<Scalars['Bytes']>;
  initiatorAddress_not_contains?: InputMaybe<Scalars['Bytes']>;
  initiatorAddress_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
  receivings_?: InputMaybe<ReceivingsOffer_Filter>;
};

export enum Trade_OrderBy {
  AcceptedCounterOffer = 'acceptedCounterOffer',
  AcceptedReceivingsOffer = 'acceptedReceivingsOffer',
  CounterAgentAddress = 'counterAgentAddress',
  CounterOffers = 'counterOffers',
  CreatedAt = 'createdAt',
  FinishedAt = 'finishedAt',
  Givings = 'givings',
  Id = 'id',
  InitiatorAddress = 'initiatorAddress',
  Receivings = 'receivings'
}

export type _Block_ = {
  __typename?: '_Block_';
  /** The hash of the block */
  hash?: Maybe<Scalars['Bytes']>;
  /** The block number */
  number: Scalars['Int'];
  /** Integer representation of the timestamp stored in blocks for the chain */
  timestamp?: Maybe<Scalars['Int']>;
};

/** The type for the top-level _meta field */
export type _Meta_ = {
  __typename?: '_Meta_';
  /**
   * Information about a specific subgraph block. The hash of the block
   * will be null if the _meta field has a block constraint that asks for
   * a block number. It will be filled if the _meta field has no block constraint
   * and therefore asks for the latest  block
   */
  block: _Block_;
  /** The deployment ID */
  deployment: Scalars['String'];
  /** If `true`, the subgraph encountered indexing errors at some past block */
  hasIndexingErrors: Scalars['Boolean'];
};

export enum _SubgraphErrorPolicy_ {
  /** Data will be returned even if the subgraph has indexing errors */
  Allow = 'allow',
  /** If the subgraph has indexing errors, data will be omitted. The default. */
  Deny = 'deny'
}

export type GetAllTradesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
}>;


export type GetAllTradesQuery = { __typename?: 'Query', trades: Array<{ __typename?: 'Trade', id: string, initiatorAddress: any, createdAt: number, givings: { __typename?: 'GivingsOffer', items: Array<{ __typename?: 'GivingsOfferItem', item: { __typename?: 'CollectionItem', tokenId: any, tokenAddress: any, name?: string | null, description?: string | null, file?: string | null } }> }, receivings: Array<{ __typename?: 'ReceivingsOffer', id: string, items: Array<{ __typename?: 'ReceivingsOfferItem', item?: { __typename?: 'CollectionItem', tokenId: any, tokenAddress: any, name?: string | null, description?: string | null, file?: string | null } | null, collection: { __typename?: 'Collection', tokenAddress: any, name?: string | null, symbol?: string | null, logo?: string | null, previewItems?: Array<{ __typename?: 'CollectionItem', file?: string | null }> | null } }> }> }> };

export type SearchItemsCollectionQueryVariables = Exact<{
  search: Scalars['String'];
}>;


export type SearchItemsCollectionQuery = { __typename?: 'Query', getCollection?: { __typename?: 'Collection', tokenAddress: any, name?: string | null, symbol?: string | null, logo?: string | null, previewItems?: Array<{ __typename?: 'CollectionItem', tokenAddress: any, tokenId: any, name?: string | null, description?: string | null, file?: string | null }> | null } | null };

export type GetMyItemsQueryVariables = Exact<{
  owner: Scalars['Bytes'];
  tokenAddress?: InputMaybe<Scalars['Bytes']>;
  nextPage?: InputMaybe<Scalars['Int']>;
}>;


export type GetMyItemsQuery = { __typename?: 'Query', itemsByOwnerAddress: { __typename?: 'CollectionItemsPagination', nextPage?: number | null, items: Array<{ __typename?: 'CollectionItem', tokenAddress: any, tokenId: any, name?: string | null, description?: string | null, file?: string | null }> } };

export type GetMyTradesQueryVariables = Exact<{
  first?: InputMaybe<Scalars['Int']>;
  skip?: InputMaybe<Scalars['Int']>;
  owner: Scalars['Bytes'];
}>;


export type GetMyTradesQuery = { __typename?: 'Query', trades: Array<{ __typename?: 'Trade', id: string, initiatorAddress: any, createdAt: number, givings: { __typename?: 'GivingsOffer', items: Array<{ __typename?: 'GivingsOfferItem', item: { __typename?: 'CollectionItem', tokenId: any, tokenAddress: any, name?: string | null, description?: string | null, file?: string | null } }> }, receivings: Array<{ __typename?: 'ReceivingsOffer', id: string, items: Array<{ __typename?: 'ReceivingsOfferItem', item?: { __typename?: 'CollectionItem', tokenId: any, tokenAddress: any, name?: string | null, description?: string | null, file?: string | null } | null, collection: { __typename?: 'Collection', tokenAddress: any, name?: string | null, symbol?: string | null, logo?: string | null, previewItems?: Array<{ __typename?: 'CollectionItem', file?: string | null }> | null } }> }> }> };

export type SearchItemsQueryVariables = Exact<{
  search: Scalars['String'];
  nextPage?: InputMaybe<Scalars['Int']>;
}>;


export type SearchItemsQuery = { __typename?: 'Query', searchItems: { __typename?: 'CollectionItemsPagination', nextPage?: number | null, items: Array<{ __typename?: 'CollectionItem', tokenAddress: any, tokenId: any, name?: string | null, description?: string | null, file?: string | null }> } };


export const GetAllTradesDocument = gql`
    query GetAllTrades($first: Int, $skip: Int) {
  trades(first: $first, skip: $skip) {
    id
    initiatorAddress
    createdAt
    givings {
      items {
        item {
          tokenId
          tokenAddress
          name
          description
          file
        }
      }
    }
    receivings {
      id
      items {
        item {
          tokenId
          tokenAddress
          name
          description
          file
        }
        collection {
          tokenAddress
          name
          symbol
          logo
          previewItems {
            file
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetAllTradesQuery__
 *
 * To run a query within a React component, call `useGetAllTradesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetAllTradesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetAllTradesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *   },
 * });
 */
export function useGetAllTradesQuery(baseOptions?: Apollo.QueryHookOptions<GetAllTradesQuery, GetAllTradesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetAllTradesQuery, GetAllTradesQueryVariables>(GetAllTradesDocument, options);
      }
export function useGetAllTradesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetAllTradesQuery, GetAllTradesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetAllTradesQuery, GetAllTradesQueryVariables>(GetAllTradesDocument, options);
        }
export type GetAllTradesQueryHookResult = ReturnType<typeof useGetAllTradesQuery>;
export type GetAllTradesLazyQueryHookResult = ReturnType<typeof useGetAllTradesLazyQuery>;
export type GetAllTradesQueryResult = Apollo.QueryResult<GetAllTradesQuery, GetAllTradesQueryVariables>;
export const SearchItemsCollectionDocument = gql`
    query SearchItemsCollection($search: String!) {
  getCollection(tokenAddress: $search) {
    tokenAddress
    name
    symbol
    logo
    previewItems {
      tokenAddress
      tokenId
      name
      description
      file
    }
  }
}
    `;

/**
 * __useSearchItemsCollectionQuery__
 *
 * To run a query within a React component, call `useSearchItemsCollectionQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchItemsCollectionQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchItemsCollectionQuery({
 *   variables: {
 *      search: // value for 'search'
 *   },
 * });
 */
export function useSearchItemsCollectionQuery(baseOptions: Apollo.QueryHookOptions<SearchItemsCollectionQuery, SearchItemsCollectionQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchItemsCollectionQuery, SearchItemsCollectionQueryVariables>(SearchItemsCollectionDocument, options);
      }
export function useSearchItemsCollectionLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchItemsCollectionQuery, SearchItemsCollectionQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchItemsCollectionQuery, SearchItemsCollectionQueryVariables>(SearchItemsCollectionDocument, options);
        }
export type SearchItemsCollectionQueryHookResult = ReturnType<typeof useSearchItemsCollectionQuery>;
export type SearchItemsCollectionLazyQueryHookResult = ReturnType<typeof useSearchItemsCollectionLazyQuery>;
export type SearchItemsCollectionQueryResult = Apollo.QueryResult<SearchItemsCollectionQuery, SearchItemsCollectionQueryVariables>;
export const GetMyItemsDocument = gql`
    query GetMyItems($owner: Bytes!, $tokenAddress: Bytes, $nextPage: Int) {
  itemsByOwnerAddress(
    input: {ownerAddress: $owner, tokenAddress: $tokenAddress, nextPage: $nextPage}
  ) {
    items {
      tokenAddress
      tokenId
      name
      description
      file
    }
    nextPage
  }
}
    `;

/**
 * __useGetMyItemsQuery__
 *
 * To run a query within a React component, call `useGetMyItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyItemsQuery({
 *   variables: {
 *      owner: // value for 'owner'
 *      tokenAddress: // value for 'tokenAddress'
 *      nextPage: // value for 'nextPage'
 *   },
 * });
 */
export function useGetMyItemsQuery(baseOptions: Apollo.QueryHookOptions<GetMyItemsQuery, GetMyItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyItemsQuery, GetMyItemsQueryVariables>(GetMyItemsDocument, options);
      }
export function useGetMyItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyItemsQuery, GetMyItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyItemsQuery, GetMyItemsQueryVariables>(GetMyItemsDocument, options);
        }
export type GetMyItemsQueryHookResult = ReturnType<typeof useGetMyItemsQuery>;
export type GetMyItemsLazyQueryHookResult = ReturnType<typeof useGetMyItemsLazyQuery>;
export type GetMyItemsQueryResult = Apollo.QueryResult<GetMyItemsQuery, GetMyItemsQueryVariables>;
export const GetMyTradesDocument = gql`
    query GetMyTrades($first: Int, $skip: Int, $owner: Bytes!) {
  trades(first: $first, skip: $skip, where: {initiatorAddress: $owner}) {
    id
    initiatorAddress
    createdAt
    givings {
      items {
        item {
          tokenId
          tokenAddress
          name
          description
          file
        }
      }
    }
    receivings {
      id
      items {
        item {
          tokenId
          tokenAddress
          name
          description
          file
        }
        collection {
          tokenAddress
          name
          symbol
          logo
          previewItems {
            file
          }
        }
      }
    }
  }
}
    `;

/**
 * __useGetMyTradesQuery__
 *
 * To run a query within a React component, call `useGetMyTradesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMyTradesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMyTradesQuery({
 *   variables: {
 *      first: // value for 'first'
 *      skip: // value for 'skip'
 *      owner: // value for 'owner'
 *   },
 * });
 */
export function useGetMyTradesQuery(baseOptions: Apollo.QueryHookOptions<GetMyTradesQuery, GetMyTradesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMyTradesQuery, GetMyTradesQueryVariables>(GetMyTradesDocument, options);
      }
export function useGetMyTradesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMyTradesQuery, GetMyTradesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMyTradesQuery, GetMyTradesQueryVariables>(GetMyTradesDocument, options);
        }
export type GetMyTradesQueryHookResult = ReturnType<typeof useGetMyTradesQuery>;
export type GetMyTradesLazyQueryHookResult = ReturnType<typeof useGetMyTradesLazyQuery>;
export type GetMyTradesQueryResult = Apollo.QueryResult<GetMyTradesQuery, GetMyTradesQueryVariables>;
export const SearchItemsDocument = gql`
    query SearchItems($search: String!, $nextPage: Int) {
  searchItems(input: {search: $search, nextPage: $nextPage}) {
    items {
      tokenAddress
      tokenId
      name
      description
      file
    }
    nextPage
  }
}
    `;

/**
 * __useSearchItemsQuery__
 *
 * To run a query within a React component, call `useSearchItemsQuery` and pass it any options that fit your needs.
 * When your component renders, `useSearchItemsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useSearchItemsQuery({
 *   variables: {
 *      search: // value for 'search'
 *      nextPage: // value for 'nextPage'
 *   },
 * });
 */
export function useSearchItemsQuery(baseOptions: Apollo.QueryHookOptions<SearchItemsQuery, SearchItemsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<SearchItemsQuery, SearchItemsQueryVariables>(SearchItemsDocument, options);
      }
export function useSearchItemsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<SearchItemsQuery, SearchItemsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<SearchItemsQuery, SearchItemsQueryVariables>(SearchItemsDocument, options);
        }
export type SearchItemsQueryHookResult = ReturnType<typeof useSearchItemsQuery>;
export type SearchItemsLazyQueryHookResult = ReturnType<typeof useSearchItemsLazyQuery>;
export type SearchItemsQueryResult = Apollo.QueryResult<SearchItemsQuery, SearchItemsQueryVariables>;