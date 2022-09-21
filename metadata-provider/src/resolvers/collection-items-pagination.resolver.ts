import { Args, Query, Resolver } from '@nestjs/graphql';
import { CollectionItemsPagination, ItemsByOwnerAddressInput } from '../types';
import { InjectMetadataService } from '../services/metadata/metadata.service.provider';
import {
  IMetadataService,
  SearchItemsInput,
} from '../services/metadata/metadata.service.interface';

@Resolver(CollectionItemsPagination.name)
export class CollectionItemsPaginationResolver {
  constructor(
    @InjectMetadataService()
    private readonly metadataService: IMetadataService,
  ) {}

  @Query()
  itemsByOwnerAddress(
    @Args('input') input: ItemsByOwnerAddressInput,
  ): Promise<CollectionItemsPagination> {
    return this.metadataService.getManyItemsByOwner({
      ownerAddress: input.ownerAddress,
      tokenAddress: input.ownerAddress ?? undefined,
      nextPage: input.nextPage ?? 1,
    });
  }

  @Query()
  searchItems(
    @Args('input') input: SearchItemsInput,
  ): Promise<CollectionItemsPagination> {
    return this.metadataService.searchItems({
      search: input.search,
      nextPage: input.nextPage ?? 1,
    });
  }
}
