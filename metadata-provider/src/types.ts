
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */

export class ItemsByOwnerAddressInput {
    ownerAddress: Bytes;
    tokenAddress?: Nullable<Bytes>;
    nextPage?: Nullable<number>;
}

export class SearchItemsInput {
    search: string;
    nextPage?: Nullable<number>;
}

export class Collection {
    tokenAddress: Bytes;
    name?: Nullable<string>;
    symbol?: Nullable<string>;
    logo?: Nullable<string>;
    previewItems?: Nullable<CollectionItem[]>;
}

export class CollectionItem {
    tokenAddress: Bytes;
    tokenId: BigInt;
    name?: Nullable<string>;
    description?: Nullable<string>;
    file?: Nullable<string>;
}

export class CollectionItemsPagination {
    items: CollectionItem[];
    nextPage?: Nullable<number>;
}

export abstract class IQuery {
    abstract itemsByOwnerAddress(input: ItemsByOwnerAddressInput): CollectionItemsPagination | Promise<CollectionItemsPagination>;

    abstract searchItems(input: SearchItemsInput): CollectionItemsPagination | Promise<CollectionItemsPagination>;
}

export class GivingsOfferItem {
    tokenAddress: Bytes;
    tokenId: BigInt;
    item: CollectionItem;
    collection: Collection;
}

export class ReceivingsOfferItem {
    tokenAddress: Bytes;
    tokenId?: Nullable<BigInt>;
    item?: Nullable<CollectionItem>;
    collection: Collection;
}

export class CounterOfferItem {
    tokenAddress: Bytes;
    tokenId: BigInt;
    item: CollectionItem;
    collection: Collection;
}

export type Bytes = any;
export type BigInt = any;
type Nullable<T> = T | null;
