import { Resolver, ResolveReference } from '@nestjs/graphql';
import { Collection } from '../types';
import { InjectMetadataService } from '../services/metadata/metadata.service.provider';
import { IMetadataService } from '../services/metadata/metadata.service.interface';

type Reference = {
  __typename: string;
  tokenAddress: string;
  tokenId?: string | null;
};

@Resolver(Collection.name)
export class CollectionsResolver {
  constructor(
    @InjectMetadataService()
    private readonly metadataService: IMetadataService,
  ) {}

  @ResolveReference()
  resolveReference({ tokenAddress }: Reference): Promise<Collection> {
    return this.metadataService.getOneCollection(tokenAddress);
  }
}
