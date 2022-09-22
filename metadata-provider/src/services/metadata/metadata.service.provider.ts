import { CACHE_MANAGER, FactoryProvider, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cache } from 'cache-manager';
import { IMetadataService } from './metadata.service.interface';
import { NftportMetadataService } from './nftport-metadata.service';
import { CacheMetadataService } from './cache-metadata.service';
import { ERC721_VALIDATOR_TOKEN } from '../erc721-validator/erc721-validator.provider';
import { IERC721Validator } from '../erc721-validator/erc721-validator.interface';

export const METADATA_SERVICE_TOKEN = Symbol('METADATA_SERVICE_TOKEN');

export const InjectMetadataService = () => Inject(METADATA_SERVICE_TOKEN);

export const metadataServiceProvider: FactoryProvider<IMetadataService> = {
  provide: METADATA_SERVICE_TOKEN,
  inject: [HttpService, ERC721_VALIDATOR_TOKEN, CACHE_MANAGER],
  useFactory: (
    httpService: HttpService,
    erc721Validator: IERC721Validator,
    cache: Cache,
  ) => {
    const metadataservice = new NftportMetadataService(
      httpService,
      erc721Validator,
    );
    return new CacheMetadataService(metadataservice, cache);
  },
};
