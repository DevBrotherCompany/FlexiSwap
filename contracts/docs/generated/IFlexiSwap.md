# IFlexiSwap

Interface of the FlexiSwap contract.
FlexiSwap is a swap tool with unique features for swapping NFTs and NFT collections.

Key features:
1. **Batch swaps:** allows users to swap multiple NFTs for multiple other NFTs within a single transaction.
2. **Wish lists:** allows users to create a customized list of up to 10 options per their swap offer to curate a collection of one or several NFTs that they are interested in exchanging.
3. **Collection wish list:** allows users to create a list of desired NFTs from a specific collection for their swap offers.
4. **Counter offers:** allows users to engage in dynamic negotiations and respond to swap offers with alternative proposals.

## Errors
### TradeDoesNotExist

```solidity
error TradeDoesNotExist(uint256 tradeId)
```

Emitted when trade with `tradeId` does not exist.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradeId | uint256 | The id of the trade. |

### OfferDoesNotExist

```solidity
error OfferDoesNotExist(uint256 tradeId, uint256 itemsId)
```

Emitted when offer with `itemsId` does not exist in trade with `tradeId`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradeId | uint256 | The id of the trade. |
| itemsId | uint256 | The id of the offer items. |

### CounterOfferDoesNotExist

```solidity
error CounterOfferDoesNotExist(uint256 tradeId, uint256 itemsId)
```

Emitted when counter offer with `itemsId` does not exist in trade with `tradeId`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradeId | uint256 | The id of the trade. |
| itemsId | uint256 | The id of the counter offer items. |

### CounterOfferAlreadyExists

```solidity
error CounterOfferAlreadyExists(uint256 tradeId, uint256 itemsId)
```

Emitted when counter offer with `counterOfferItemsId` already exists in trade with `tradeId`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradeId | uint256 | The id of the trade. |
| itemsId | uint256 | The id of the counter offer items. |

### InvalidTradeOffersNumber

```solidity
error InvalidTradeOffersNumber()
```

Emitted when trade has invalid number of offers.

### InvalidTradeOffersItemNumber

```solidity
error InvalidTradeOffersItemNumber()
```

Emitted when trade offer has invalid number of items.

### TradeOwnerOnly

```solidity
error TradeOwnerOnly()
```

Emitted when caller is not the trade owner.

### InvalidForTradeOwner

```solidity
error InvalidForTradeOwner()
```

Emitted when caller is the trade owner.

### TokenNotApproved

```solidity
error TokenNotApproved(address nftAddress, uint256 tokenId)
```

Emitted when token with `nftAddress` and `tokenId` is not approved to use.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| nftAddress | address | The address of the NFT contract. |
| tokenId | uint256 | The id of the NFT token. |

### InvalidAdditionalAssets

```solidity
error InvalidAdditionalAssets()
```

Emitted when caller provide invalid additional assets.

## Events
### TradeCreated

```solidity
event TradeCreated(uint256 tradeId, struct IFlexiSwap.Trade trade)
```

Emitted when trade is created with `tradeId` and `trade` data.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradeId | uint256 | The id of the trade. |
| trade | struct IFlexiSwap.Trade | The trade data. |

### TradeAccepted

```solidity
event TradeAccepted(address accepter, uint256 tradeId, uint256 itemsId)
```

Emitted when trade with `tradeId` and `itemsId` is accepted by `accepter`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| accepter | address | The address of the trade accepter. |
| tradeId | uint256 | The id of the trade. |
| itemsId | uint256 | The id of the offer items. |

### CounterOfferCreated

```solidity
event CounterOfferCreated(address counterOfferer, uint256 tradeId, uint256 itemsId)
```

Emitted when counter offer with `itemsId` is offered by `counterOfferer` to trade with `tradeId`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| counterOfferer | address | The address of the trade counter offerer. |
| tradeId | uint256 | The id of the trade. |
| itemsId | uint256 | The id of the counter offer items. |

### CounterOfferAccepted

```solidity
event CounterOfferAccepted(uint256 tradeId, uint256 itemsId)
```

Emitted when counter offer with `itemsId` is accepted for trade with `tradeId`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| tradeId | uint256 | The id of the trade. |
| itemsId | uint256 | The id of the counter offer items. |

## Events
### trade

```solidity
function trade(uint256 _tradeId) external view returns (struct IFlexiSwap.Trade)
```

Returns the trade data by `_tradeId`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tradeId | uint256 | The id of the trade. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IFlexiSwap.Trade | The trade data. |

### items

```solidity
function items(uint256 _itemsId) external view returns (struct IFlexiSwap.Item[])
```

Returns the array offer of items data by `_itemsId`.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _itemsId | uint256 | The id of the offer items. |

#### Return Values

| Name | Type | Description |
| ---- | ---- | ----------- |
| [0] | struct IFlexiSwap.Item[] | The array of items data. |

### createTrade

```solidity
function createTrade(struct IFlexiSwap.Item[] _givings, struct IFlexiSwap.Item[][] _receivings) external
```

Creates a new trade with items `_givings` to exchange for one of items `_receivings`.

Requirements:

- `_receivings` must have a valid number of offers.
- `_receivings` must have a valid number of items per offer.
- `_givings` must have a valid number of items.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _givings | struct IFlexiSwap.Item[] | The array of items to give. |
| _receivings | struct IFlexiSwap.Item[][] | The array of wishlists of items to receive. |

### acceptOffer

```solidity
function acceptOffer(uint256 _tradeId, uint256 _itemsId, struct IFlexiSwap.Item[] _additionalAssets) external
```

Accepts the trade with `_tradeId` and `_itemsId` and sends `_additionalAssets` to the trade initiator.

_The `_additionalAssets` is a list of additional tokens that the initiator wants to receive in addition to the items in the trade,
for example, if trade initiator stated that he wants 2 tokens from collection A in addition, then `_additionalAssets`
should contain strictly 2 tokens from collection A.

Requirements:

- trade with `_tradeId` must exist.
- caller cannot be the trade owner.
- offer with `_itemsId` must exist in trade with `_tradeId`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tradeId | uint256 | The id of the trade. |
| _itemsId | uint256 | The id of the offer items. |
| _additionalAssets | struct IFlexiSwap.Item[] | The array of additional tokens to send. |

### createCounterOffer

```solidity
function createCounterOffer(uint256 _tradeId, struct IFlexiSwap.Item[] _offerItems) external
```

Creates a counter offer with items `_offerItems` for trade with `_tradeId`.

Requirements:

- trade with `_tradeId` must exist.
- caller cannot be the trade owner.
- counter offer with `_offerItems` must not exist in trade with `_tradeId`.
- `_offerItems` must have a valid length.

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tradeId | uint256 | The id of the trade. |
| _offerItems | struct IFlexiSwap.Item[] | The array of items to offer. |

### acceptCounterOffer

```solidity
function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId) external
```

Accepts the counter offer for `_tradeId` and items with `_itemsId`.

_All tokens which are included in the trade must be approved to use by contract.

Requirements:

- trade with `_tradeId` must exist.
- caller must be the trade owner.
- counter offer with `_itemsId` must exist in trade with `_tradeId`._

#### Parameters

| Name | Type | Description |
| ---- | ---- | ----------- |
| _tradeId | uint256 | The id of the trade. |
| _itemsId | uint256 | The id of the counter offer items. |

