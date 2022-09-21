import { HttpService } from '@nestjs/axios';
import { IERC721Validator } from './erc721-validator.interface';

type GetOneCollectionResponse = {
  contract?: {
    type?: 'ERC721' | 'ERC1155';
  };
};

export class NftportERC721Validator implements IERC721Validator {
  constructor(private readonly httpService: HttpService) {}

  async isERC721<T extends { tokenAddress: string }>(
    input: T,
  ): Promise<T & { isERC721: boolean }> {
    const { data } =
      await this.httpService.axiosRef.get<GetOneCollectionResponse>(
        `/nfts/${input.tokenAddress}`,
        {
          params: {
            page_size: 0,
          },
        },
      );
    const isERC721 = data.contract?.type === 'ERC721';
    return { ...input, isERC721 };
  }
}
