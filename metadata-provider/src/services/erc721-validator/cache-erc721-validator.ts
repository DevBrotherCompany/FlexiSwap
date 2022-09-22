import { Cache } from 'cache-manager';
import { IERC721Validator } from './erc721-validator.interface';

// TODO: Cache singleton promises
export class CacheERC721Validator implements IERC721Validator {
  constructor(
    private readonly erc721Validator: IERC721Validator,
    private readonly cache: Cache,
  ) {}

  async isERC721<T extends { tokenAddress: string }>(
    input: T,
  ): Promise<T & { isERC721: boolean }> {
    const key = 'CacheERC721Validator#isERC721' + input.tokenAddress;
    const isERC721 = await this.cache.get<boolean>(key);
    if (isERC721 !== undefined) return { ...input, isERC721 };

    const result = await this.erc721Validator.isERC721(input);
    await this.cache.set(key, result.isERC721, { ttl: 0 });
    return result;
  }
}
