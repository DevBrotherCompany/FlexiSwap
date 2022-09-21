import {
  Collection,
  CollectionItem,
  CollectionItemsPagination,
} from '../../types';

export type GetManyItemsByOwnerInput = {
  ownerAddress: string;
  tokenAddress?: string;
  nextPage: number;
};

export type SearchItemsInput = {
  search: string;
  nextPage: number;
};

export interface IMetadataService {
  getOneItem(tokenAddress: string, tokenId: string): Promise<CollectionItem>;

  getOneCollection(tokenAddress: string): Promise<Collection>;

  getManyItemsByOwner(
    input: GetManyItemsByOwnerInput,
  ): Promise<CollectionItemsPagination>;

  searchItems(input: SearchItemsInput): Promise<CollectionItemsPagination>;
}
