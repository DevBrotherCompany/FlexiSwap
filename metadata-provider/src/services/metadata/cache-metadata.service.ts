import { Cache } from 'cache-manager';
import {
  GetManyItemsByOwnerInput,
  IMetadataService,
  SearchItemsInput,
} from './metadata.service.interface';
import {
  Collection,
  CollectionItem,
  CollectionItemsPagination,
} from '../../types';

// TODO: Cache singleton promises
export class CacheMetadataService implements IMetadataService {
  constructor(
    private readonly metadataService: IMetadataService,
    private readonly cache: Cache,
  ) {}

  async getManyItemsByOwner(
    input: GetManyItemsByOwnerInput,
  ): Promise<CollectionItemsPagination> {
    const key =
      'CacheMetadataService#getManyItemsByOwner' + JSON.stringify(input);
    let result = await this.cache.get<CollectionItemsPagination>(key);
    if (result) return result;

    result = await this.metadataService.getManyItemsByOwner(input);
    await this.cache.set(key, result);
    return result;
  }

  async getOneCollection(tokenAddress: string): Promise<Collection> {
    const key = 'CacheMetadataService#getOneCollection' + tokenAddress;
    let result = await this.cache.get<Collection>(key);
    if (result) return result;

    result = await this.metadataService.getOneCollection(tokenAddress);
    await this.cache.set(key, result);
    return result;
  }

  async getOneItem(
    tokenAddress: string,
    tokenId: string,
  ): Promise<CollectionItem> {
    const key = 'CacheMetadataService#getOneItem' + tokenAddress + tokenId;
    let result = await this.cache.get<CollectionItem>(key);
    if (result) return result;

    result = await this.metadataService.getOneItem(tokenAddress, tokenId);
    await this.cache.set(key, result);
    return result;
  }

  async searchItems(
    input: SearchItemsInput,
  ): Promise<CollectionItemsPagination> {
    const key = 'CacheMetadataService#searchItems' + JSON.stringify(input);
    let result = await this.cache.get<CollectionItemsPagination>(key);
    if (result) return result;

    result = await this.metadataService.searchItems(input);
    await this.cache.set(key, result);
    return result;
  }
}
