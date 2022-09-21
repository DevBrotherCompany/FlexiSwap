export interface IERC721Validator {
  isERC721<T extends { tokenAddress: string }>(
    input: T,
  ): Promise<T & { isERC721: boolean }>;
}
