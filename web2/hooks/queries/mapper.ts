import {
  IGivingsItem,
  IGivingsOffer,
  INftCollection,
  INftItem,
  IReceivingsItem,
  IReceivingsOffer,
  ITrade,
} from "@/interfaces";
import {
  Collection,
  CollectionItem,
  GivingsOffer,
  GivingsOfferItem,
  ReceivingsOffer,
  ReceivingsOfferItem,
  Trade,
} from "@/packages/graphql/generated";
import {
  IterableElement,
  PartialDeep,
  Primitive,
  ReadonlyDeep,
} from "type-fest";
import { ConditionalSimplifyDeep as SimplifyDeep } from "type-fest/source/conditional-simplify";

type ToMappedNullable<TFull, TPartial, TMapped> = TMapped extends any[]
  ? ToMapped<
      IterableElement<TFull>,
      IterableElement<TPartial>,
      IterableElement<TMapped>
    >[]
  : ToMapped<TFull, TPartial, TMapped>;

type ToMapped<TFull, TPartial, TMapped> = {
  [Key in Extract<
    keyof TMapped,
    keyof TPartial
  >]: TMapped[Key] extends Primitive
    ? TMapped[Key]
    : null extends TMapped[Key]
    ? // @ts-ignore
      ToMappedNullable<TFull[Key], TPartial[Key], NonNullable<TMapped[Key]>> | null
    : TMapped[Key] extends any[]
    ? // @ts-ignore
      ToMapped<IterableElement<TFull[Key]>, IterableElement<TPartial[Key]>, IterableElement<TMapped[Key]>>[]
    : // @ts-ignore
      ToMapped<TFull[Key], TPartial[Key], TMapped[Key]>;
};

type Mapper<TFull, TMapped> = <
  TPartial extends PartialDeep<TFull, { recurseIntoArrays: true }>
>(
  item: TPartial
) => SimplifyDeep<ReadonlyDeep<ToMapped<TFull, TPartial, TMapped>>>;

const mapItem: Mapper<CollectionItem, INftItem> = (item) => {
  const { tokenAddress, tokenId, collection, __typename, ...rest } = item;

  return filterUndefined({
    tokenId: tokenId && BigInt(tokenId.toString()),
    tokenAddress: tokenAddress && (tokenAddress.toString() as Address),
    collection: collection && mapCollection(collection),
    ...rest,
  }) as any;
};

const mapTrade: Mapper<Trade, ITrade> = (trade) => {
  const { id, givings, initiatorAddress, receivings, createdAt } = trade;

  return filterUndefined({
    id: id && BigInt(id.toString()),
    initiatorAddress:
      initiatorAddress && (initiatorAddress.toString() as Address),
    givings: givings && mapGivingsOffer(givings),
    receivings:
      receivings &&
      receivings.filter(Boolean).map((r) => mapReceivingsOffer(r!)),
    createdAt,
  }) as any;
};

const mapGivingsOffer: Mapper<GivingsOffer, IGivingsOffer> = (givingsOffer) => {
  const { id, items, trade } = givingsOffer;
  return filterUndefined({
    id: id && BigInt(id),
    items: items && items.filter(Boolean).map((i) => mapGivingItem(i!)),
    trade: trade && mapTrade(trade),
  }) as any;
};

const mapReceivingsOffer: Mapper<ReceivingsOffer, IReceivingsOffer> = (
  receivingsOffer
) => {
  const { id, items, trade } = receivingsOffer;
  return filterUndefined({
    id: id && BigInt(id),
    items: items && items.filter(Boolean).map((i) => mapReceivingItem(i!)),
    trade: trade && mapTrade(trade),
  }) as any;
};

const mapGivingItem: Mapper<GivingsOfferItem, IGivingsItem> = (givingItem) => {
  const { id, item, tokenAddress, tokenId, collection, offer } = givingItem;
  return filterUndefined({
    id: id && BigInt(id),
    item: item && mapItem(item),
    tokenAddress: tokenAddress && (tokenAddress.toString() as Address),
    tokenId: tokenId && BigInt(tokenId.toString()),
    collection: collection && mapCollection(collection),
    offer: offer && mapGivingsOffer(offer),
  }) as any;
};

const mapReceivingItem: Mapper<ReceivingsOfferItem, IReceivingsItem> = (
  receivingItem
) => {
  const { id, item, tokenAddress, tokenId, collection, offer } = receivingItem;
  return filterUndefined({
    id: id && BigInt(id),
    item: item && mapItem(item),
    tokenAddress: tokenAddress && (tokenAddress.toString() as Address),
    tokenId: tokenId && BigInt(tokenId.toString()),
    collection: collection && mapCollection(collection),
    offer: offer && mapReceivingsOffer(offer),
  }) as any;
};

const mapCollection: Mapper<Collection, INftCollection> = (collection) => {
  const { __typename, tokenAddress, previewItems, ...rest } = collection;
  return filterUndefined({
    tokenAddress: tokenAddress && (tokenAddress.toString() as Address),
    previewItems:
      previewItems &&
      previewItems.filter(Boolean).map((item) => mapItem(item!)),
    ...rest,
  }) as any;
};

const filterUndefined = <T extends Record<string, unknown>>(obj: T) => {
  const entries = Array.from(Object.entries(obj)).filter(
    ([_, value]) => value !== undefined
  );
  return Object.fromEntries(entries);
};

export {
  mapCollection,
  mapItem,
  mapGivingsOffer,
  mapGivingItem,
  mapReceivingsOffer,
  mapReceivingItem,
  mapTrade
};