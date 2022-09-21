import {
  Parent,
  ResolveField,
  Resolver,
  ResolveReference,
} from '@nestjs/graphql';
import { Collection, CollectionItem } from '../types';
import { InjectMetadataService } from '../services/metadata/metadata.service.provider';
import { IMetadataService } from '../services/metadata/metadata.service.interface';

type Reference = {
  __typename: string;
  tokenAddress: string;
  tokenId?: string | null;
};

@Resolver(CollectionItem.name)
export class CollectionItemsResolver {
  constructor(
    @InjectMetadataService()
    private readonly metadataService: IMetadataService,
  ) {}

  @ResolveField()
  collection(@Parent() item: CollectionItem): Promise<Collection> {
    return this.metadataService.getOneCollection(item.tokenAddress);
  }

  @ResolveReference()
  resolveReference({
    tokenAddress,
    tokenId,
  }: Reference): Promise<CollectionItem | null> {
    if (!tokenId) return null;
    return this.metadataService.getOneItem(tokenAddress, tokenId);
  }
}
