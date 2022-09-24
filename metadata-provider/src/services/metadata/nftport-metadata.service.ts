import { HttpService } from '@nestjs/axios';
import {
  Collection,
  CollectionItem,
  CollectionItemsPagination,
} from '../../types';
import {
  GetManyItemsByOwnerInput,
  IMetadataService,
  SearchItemsInput,
} from './metadata.service.interface';
import { IERC721Validator } from '../erc721-validator/erc721-validator.interface';
import { isAddress } from '../../utils/is-address';

type GetOneItemResponse = {
  nft: {
    contract_address: string;
    token_id: string;
    metadata?: {
      name?: string;
      description?: string;
    };
    cached_file_url?: string;
  };
};

type GetManyItemsByOwnerResponse = {
  nfts: {
    contract_address: string;
    token_id: string;
    name?: string;
    description?: string;
    cached_file_url?: string;
  }[];
};

type GetOneCollectionResponse = {
  nfts: GetOneItemResponse['nft'][];
  contract: {
    name?: string;
    symbol?: string;
    type?: 'ERC721' | 'ERC1155';
    metadata?: {
      cached_thumbnail_url?: string;
    };
  };
};

type GetBySearchResponse = {
  search_results: {
    contract_address: string;
    token_id: string;
    cached_file_url: string;
    name: string;
    description: string;
  }[];
};

export class NftportMetadataService implements IMetadataService {
  constructor(
    private readonly httpService: HttpService,
    private readonly erc721Validator: IERC721Validator,
  ) {}

  private mapRawItem(item: GetOneItemResponse['nft']): CollectionItem {
    return {
      tokenAddress: item.contract_address,
      tokenId: item.token_id,
      name: item.metadata?.name,
      description: item.metadata?.description,
      file: item.cached_file_url,
    };
  }

  async getOneItem(
    tokenAddress: string,
    tokenId: string,
  ): Promise<CollectionItem> {
    const { data } = await this.httpService.axiosRef.get<GetOneItemResponse>(
      `/nfts/${tokenAddress}/${tokenId}`,
    );
    return this.mapRawItem(data.nft);
  }

  async getOneCollection(tokenAddress: string): Promise<Collection> {
    const { data } =
      await this.httpService.axiosRef.get<GetOneCollectionResponse>(
        `/nfts/${tokenAddress}`,
        {
          params: { page_size: 4 },
        },
      );
    return {
      tokenAddress,
      name: data.contract.name,
      symbol: data.contract.symbol,
      logo: data.contract.metadata?.cached_thumbnail_url,
      previewItems: data.nfts.map((item) => this.mapRawItem(item)),
    };
  }

  async getManyItemsByOwner(
    input: GetManyItemsByOwnerInput,
  ): Promise<CollectionItemsPagination> {
    const { data } =
      await this.httpService.axiosRef.get<GetManyItemsByOwnerResponse>(
        `/accounts/${input.ownerAddress}`,
        {
          params: {
            contract_address: input.tokenAddress,
            page_number: input.nextPage,
            exclude: 'erc1155',
          },
        },
      );
    return {
      items: data.nfts.map((item) => ({
        tokenAddress: item.contract_address,
        tokenId: item.token_id,
        name: item.name,
        description: item.description,
        file: item.cached_file_url,
      })),
      nextPage: data.nfts.length !== 0 ? input.nextPage + 1 : null,
    };
  }

  private async getByTokenAddress(
    input: SearchItemsInput,
  ): Promise<CollectionItemsPagination> {
    const { data } =
      await this.httpService.axiosRef.get<GetOneCollectionResponse>(
        `/nfts/${input.search}`,
        {
          params: { page_number: input.nextPage },
        },
      );
    if (data.contract.type !== 'ERC721') return { items: [], nextPage: null };
    return {
      items: data.nfts.map((item) => this.mapRawItem(item)),
      nextPage: data.nfts.length !== 0 ? input.nextPage + 1 : null,
    };
  }

  private async getBySearch(
    input: SearchItemsInput,
  ): Promise<CollectionItemsPagination> {
    const { data } = await this.httpService.axiosRef.get<GetBySearchResponse>(
      '/search',
      {
        params: {
          text: input.search,
          page_size: input.nextPage,
        },
      },
    );
    const items = await Promise.all(
      data.search_results.map((item) => {
        return this.erc721Validator.isERC721({
          tokenAddress: item.contract_address,
          tokenId: item.token_id,
          name: item.name,
          description: item.description,
          file: item.cached_file_url,
        });
      }),
    );
    const erc721Items = items
      .filter(({ isERC721 }) => isERC721)
      .map(({ isERC721, ...item }) => item);
    return {
      items: erc721Items,
      nextPage: input.nextPage + 1,
    };
  }

  async searchItems(
    input: SearchItemsInput,
  ): Promise<CollectionItemsPagination> {
    if (isAddress(input.search)) return this.getByTokenAddress(input);

    const resultItems = [];
    let counter = 0;
    let nextPage = input.nextPage;
    while (resultItems.length < 50 || counter < 10) {
      const result = await this.getBySearch({ ...input, nextPage });
      if (result.items.length === 0) {
        counter++;
      } else {
        resultItems.push(result.items);
        counter = 0;
      }

      nextPage = result.nextPage;
    }
  }
}
