import { Parent, ResolveField, Resolver } from '@nestjs/graphql';
import { CounterOfferItem, GivingsOfferItem, ReceivingsOfferItem } from '../types';
import { InjectMetadataService } from '../services/metadata/metadata.service.provider';
import { IMetadataService } from '../services/metadata/metadata.service.interface';

// TODO: Split into several files
@Resolver(GivingsOfferItem.name)
export class GivingsOfferItemResolver {
  constructor(
    @InjectMetadataService()
    private readonly metadataService: IMetadataService,
  ) {}

  @ResolveField()
  item(@Parent() { tokenAddress, tokenId }: GivingsOfferItem) {
    return this.metadataService.getOneItem(tokenAddress, tokenId);
  }

  @ResolveField()
  collection(@Parent() { tokenAddress }: GivingsOfferItem) {
    return this.metadataService.getOneCollection(tokenAddress);
  }
}

@Resolver(ReceivingsOfferItem.name)
export class ReceivingsOfferItemResolver {
  constructor(
    @InjectMetadataService()
    private readonly metadataService: IMetadataService,
  ) {}

  @ResolveField()
  item(@Parent() { tokenAddress, tokenId }: ReceivingsOfferItem) {
    if (!tokenId) return null;
    return this.metadataService.getOneItem(tokenAddress, tokenId);
  }

  @ResolveField()
  collection(@Parent() { tokenAddress }: ReceivingsOfferItem) {
    return this.metadataService.getOneCollection(tokenAddress);
  }
}

@Resolver(CounterOfferItem.name)
export class CounterOfferItemResolver {
  constructor(
    @InjectMetadataService()
    private readonly metadataService: IMetadataService,
  ) {}

  @ResolveField()
  item(@Parent() { tokenAddress, tokenId }: CounterOfferItem) {
    return this.metadataService.getOneItem(tokenAddress, tokenId);
  }

  @ResolveField()
  collection(@Parent() { tokenAddress }: CounterOfferItem) {
    return this.metadataService.getOneCollection(tokenAddress);
  }
}
