import { HttpService } from '@nestjs/axios';
import { ConfigService } from '@nestjs/config';
import axios from 'axios';

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
import { getUniqueItemsByProperties } from 'src/utils/remove-duplicates';

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
    private readonly configService: ConfigService,
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
    try {
      const { data } = await axios.get(
        `https://deep-index.moralis.io/api/v2/nft/${tokenAddress}/metadata`,
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

      const collectionItems = await this.searchItems({
        search: tokenAddress,
        nextPage: 0,
      });

      return {
        tokenAddress,
        name: data.name,
        symbol: data.symbol,
        previewItems: collectionItems.items,
      };
    } catch (error) {
      return { tokenAddress };
    }
  }

  async getManyItemsByOwner(
    input: GetManyItemsByOwnerInput,
  ): Promise<CollectionItemsPagination> {
    const { data } =
      await this.httpService.axiosRef.get<GetManyItemsByOwnerResponse>(
        `/accounts/${input.ownerAddress}`,
        {
          params: {
            // contract_address: input.tokenAddress,
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
    const isCollectionERC721 = this.erc721Validator.isCollectionERC721(
      input.search,
    );

    if (!isCollectionERC721) {
      return { items: [], nextPage: null };
    }

    try {
      // TODO: update typings
      const { data } = await this.httpService.axiosRef.get<any>(
        `/nfts/${input.search}`,
        {
          params: { page_number: input.nextPage, include: 'all' },
        },
      );

      return {
        items: data.nfts.map((item) => this.mapRawItem(item)),
        nextPage: data.nfts.length !== 0 ? input.nextPage + 1 : null,
      };
    } catch (error) {
      return { items: [], nextPage: null };
    }
  }

  private async getBySearch(
    input: SearchItemsInput,
  ): Promise<CollectionItemsPagination> {
    try {
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
    } catch (error) {
      console.log('error', error);
      return { items: [], nextPage: null };
    }
  }

  async searchItems(
    input: SearchItemsInput,
  ): Promise<CollectionItemsPagination> {
    if (isAddress(input.search)) return this.getByTokenAddress(input);

    let resultItems = [];
    let nextPage = input.nextPage;
    let nftsAvailable = true;

    while (nftsAvailable && resultItems.length < 50 && nextPage !== null) {
      const result = await this.getBySearch({ ...input, nextPage });
      if (result.items.length === 0) {
        nftsAvailable = false;
      } else {
        resultItems.push(...result.items);
        resultItems = getUniqueItemsByProperties(resultItems, [
          'tokenAddress',
          'tokenId',
        ]);
      }
      nextPage = result.nextPage;
    }

    return {
      items: resultItems.flat(),
    };
  }
}
