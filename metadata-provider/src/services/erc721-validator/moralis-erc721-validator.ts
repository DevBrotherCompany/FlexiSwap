import { IERC721Validator } from './erc721-validator.interface';
import axios from 'axios';
import { ConfigService } from '@nestjs/config';

export class MoralisERC721Validator implements IERC721Validator {
  constructor(private readonly configService: ConfigService) {}

  async isCollectionERC721(collectionAddress: string): Promise<boolean> {
    try {
      const { data } = await axios.get(
        `https://deep-index.moralis.io/api/v2/nft/${collectionAddress}/metadata`,
        {
          headers: {
            accept: 'application/json',
            'x-api-key': this.configService.get('MORALIS_API_KEY'),
          },
          params: {
            chain: 'polygon',
          },
        },
      );

      return data.contract_type === 'ERC721';
    } catch (err) {
      return false;
    }
  }

  async isERC721<T extends { tokenAddress: string }>(
    input: T,
  ): Promise<T & { isERC721: boolean }> {
    try {
      const { data } = await axios.get(
        `https://deep-index.moralis.io/api/v2/nft/${input.tokenAddress}/metadata`,
        {
          headers: {
            accept: 'application/json',
            'x-api-key': this.configService.get('MORALIS_API_KEY'),
          },
          params: {
            chain: 'polygon',
          },
        },
      );
      const isERC721 = data.contract_type === 'ERC721';
      return { ...input, isERC721 };
    } catch (err) {
      return { ...input, isERC721: false };
    }
  }
}
