import { DocItemContext } from 'solidity-docgen/dist/site';

export function isInterface({ item }: DocItemContext): boolean {
  if (item.nodeType !== 'ContractDefinition') return false;
  return /^I[A-Z].*/.test(item.name);
}
