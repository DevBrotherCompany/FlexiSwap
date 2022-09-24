import { CACHE_MANAGER, FactoryProvider, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Cache } from 'cache-manager';
import { IERC721Validator } from './erc721-validator.interface';
import { NftportERC721Validator } from './nftport-erc721-validator';
import { CacheERC721Validator } from './cache-erc721-validator';

export const ERC721_VALIDATOR_TOKEN = Symbol('ERC721_VALIDATOR_TOKEN');

export const InjectERC721Validator = () => Inject(ERC721_VALIDATOR_TOKEN);

export const erc721ValidatorProvider: FactoryProvider<IERC721Validator> = {
  provide: ERC721_VALIDATOR_TOKEN,
  inject: [HttpService, CACHE_MANAGER],
  useFactory: (httpService: HttpService, cache: Cache) => {
    const erc721Validator = new NftportERC721Validator(httpService);
    return new CacheERC721Validator(erc721Validator, cache);
  },
};
