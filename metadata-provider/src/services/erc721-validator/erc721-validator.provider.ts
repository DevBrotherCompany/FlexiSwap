import { FactoryProvider, Inject } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { IERC721Validator } from './erc721-validator.interface';
import { NftportERC721Validator } from './nftport-erc721-validator';

export const ERC721_VALIDATOR_TOKEN = Symbol('ERC721_VALIDATOR_TOKEN');

export const InjectERC721Validator = () => Inject(ERC721_VALIDATOR_TOKEN);

export const erc721ValidatorProvider: FactoryProvider<IERC721Validator> = {
  provide: ERC721_VALIDATOR_TOKEN,
  inject: [HttpService],
  useFactory: (httpService: HttpService) => {
    return new NftportERC721Validator(httpService);
  },
};
