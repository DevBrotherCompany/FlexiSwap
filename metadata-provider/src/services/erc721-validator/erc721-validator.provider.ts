import { CACHE_MANAGER, FactoryProvider, Inject } from '@nestjs/common';
import { Cache } from 'cache-manager';
import { IERC721Validator } from './erc721-validator.interface';
import { MoralisERC721Validator } from './moralis-erc721-validator';
import { CacheERC721Validator } from './cache-erc721-validator';
import { ConfigService } from '@nestjs/config';

export const ERC721_VALIDATOR_TOKEN = Symbol('ERC721_VALIDATOR_TOKEN');

export const InjectERC721Validator = () => Inject(ERC721_VALIDATOR_TOKEN);

export const erc721ValidatorProvider: FactoryProvider<IERC721Validator> = {
  provide: ERC721_VALIDATOR_TOKEN,
  inject: [CACHE_MANAGER, ConfigService],
  useFactory: (
    cache: Cache,
    configService: ConfigService,
  ) => {
    const erc721Validator = new MoralisERC721Validator(
      configService,
    );
    return new CacheERC721Validator(erc721Validator, cache);
  },
};
