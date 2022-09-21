import { ethers } from 'ethers';

export const isAddress = (input: string): boolean => {
  return ethers.utils.isAddress(input);
};
