//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

/**
 * @title Interface of the FlexiSwap contract.
 * @notice FlexiSwap is a swap tool with unique features for swapping NFTs and NFT collections.
 *
 * Key features:
 * 1. **Batch swaps:** allows users to swap multiple NFTs for multiple other NFTs within a single transaction.
 * 2. **Wish lists:** allows users to create a customized list of up to 10 options per their swap offer to curate a collection of one or several NFTs that they are interested in exchanging.
 * 3. **Collection wish list:** allows users to create a list of desired NFTs from a specific collection for their swap offers.
 * 4. **Counter offers:** allows users to engage in dynamic negotiations and respond to swap offers with alternative proposals.
 */
interface IFlexiSwap {
    struct Trade {
        address initiator;
        uint256 givingsId;
        uint256[] receivingsIds;
        uint256[] counterOfferItemsIds;
    }

    struct Item {
        address nftAddress;
        uint256 tokenId;
        bool isEmptyToken;
    }

    /**
     * @notice Emitted when trade with `tradeId` does not exist.
     * @param tradeId The id of the trade.
     */
    error TradeDoesNotExist(uint256 tradeId);

    /**
     * @notice Emitted when offer with `itemsId` does not exist in trade with `tradeId`.
     * @param tradeId The id of the trade.
     * @param itemsId The id of the offer items.
     */
    error OfferDoesNotExist(uint256 tradeId, uint256 itemsId);

    /**
     * @notice Emitted when counter offer with `itemsId` does not exist in trade with `tradeId`.
     * @param tradeId The id of the trade.
     * @param itemsId The id of the counter offer items.
     */
    error CounterOfferDoesNotExist(uint256 tradeId, uint256 itemsId);

    /**
     * @notice Emitted when counter offer with `counterOfferItemsId` already exists in trade with `tradeId`.
     * @param tradeId The id of the trade.
     * @param itemsId The id of the counter offer items.
     */
    error CounterOfferAlreadyExists(uint256 tradeId, uint256 itemsId);

    /**
     * @notice Emitted when trade has invalid number of offers.
     */
    error InvalidTradeOffersNumber();

    /**
     * @notice Emitted when trade offer has invalid number of items.
     */
    error InvalidTradeOffersItemNumber();

    /**
     * @notice Emitted when caller is not the trade owner.
     */
    error TradeOwnerOnly();

    /**
     * @notice Emitted when caller is the trade owner.
     */
    error InvalidForTradeOwner();

    /**
     * @notice Emitted when token with `nftAddress` and `tokenId` is not approved to use.
     * @param nftAddress The address of the NFT contract.
     * @param tokenId The id of the NFT token.
     */
    error TokenNotApproved(address nftAddress, uint256 tokenId);

    /**
     * @notice Emitted when caller provide invalid additional assets.
     */
    error InvalidAdditionalAssets();

    /**
     * @notice Emitted when trade is created with `tradeId` and `trade` data.
     * @param tradeId The id of the trade.
     * @param trade The trade data.
     */
    event TradeCreated(uint256 tradeId, Trade trade);

    /**
     * @notice Emitted when trade with `tradeId` and `itemsId` is accepted by `accepter`.
     * @param accepter The address of the trade accepter.
     * @param tradeId The id of the trade.
     * @param itemsId The id of the offer items.
     */
    event TradeAccepted(address accepter, uint256 tradeId, uint256 itemsId);

    /**
     * @notice Emitted when counter offer with `itemsId` is offered by `counterOfferer` to trade with `tradeId`.
     * @param counterOfferer The address of the trade counter offerer.
     * @param tradeId The id of the trade.
     * @param itemsId The id of the counter offer items.
     */
    event CounterOfferCreated(address counterOfferer, uint256 tradeId, uint256 itemsId);

    /**
     * @notice Emitted when counter offer with `itemsId` is accepted for trade with `tradeId`.
     * @param tradeId The id of the trade.
     * @param itemsId The id of the counter offer items.
     */
    event CounterOfferAccepted(uint256 tradeId, uint256 itemsId);

    /**
     * @notice Returns the trade data by `_tradeId`.
     * @param _tradeId The id of the trade.
     * @return The trade data.
     */
    function trade(uint256 _tradeId) external view returns (Trade memory);

    /**
     * @notice Returns the array offer of items data by `_itemsId`.
     * @param _itemsId The id of the offer items.
     * @return The array of items data.
     */
    function items(uint256 _itemsId) external view returns (Item[] memory);

    /**
     * @notice Creates a new trade with items `_givings` to exchange for one of items `_receivings`.
     *
     * Requirements:
     *
     * - `_receivings` must have a valid number of offers.
     * - `_receivings` must have a valid number of items per offer.
     * - `_givings` must have a valid number of items.
     *
     * @param _givings The array of items to give.
     * @param _receivings The array of wishlists of items to receive.
     */
    function createTrade(Item[] memory _givings, Item[][] memory _receivings) external;

    /**
     * @notice Accepts the trade with `_tradeId` and `_itemsId` and sends `_additionalAssets` to the trade initiator.
     * @dev The `_additionalAssets` is a list of additional tokens that the initiator wants to receive in addition to the items in the trade,
     * for example, if trade initiator stated that he wants 2 tokens from collection A in addition, then `_additionalAssets`
     * should contain strictly 2 tokens from collection A.
     *
     * Requirements:
     *
     * - trade with `_tradeId` must exist.
     * - caller cannot be the trade owner.
     * - offer with `_itemsId` must exist in trade with `_tradeId`.
     *
     * @param _tradeId The id of the trade.
     * @param _itemsId The id of the offer items.
     * @param _additionalAssets The array of additional tokens to send.
     */
    function acceptOffer(uint256 _tradeId, uint256 _itemsId, Item[] memory _additionalAssets) external;

    /**
     * @notice Creates a counter offer with items `_offerItems` for trade with `_tradeId`.
     *
     * Requirements:
     *
     * - trade with `_tradeId` must exist.
     * - caller cannot be the trade owner.
     * - counter offer with `_offerItems` must not exist in trade with `_tradeId`.
     * - `_offerItems` must have a valid length.
     *
     * @param _tradeId The id of the trade.
     * @param _offerItems The array of items to offer.
     */
    function createCounterOffer(uint256 _tradeId, Item[] memory _offerItems) external;

    /**
     * @notice Accepts the counter offer for `_tradeId` and items with `_itemsId`.
     * @dev All tokens which are included in the trade must be approved to use by contract.
     *
     * Requirements:
     *
     * - trade with `_tradeId` must exist.
     * - caller must be the trade owner.
     * - counter offer with `_itemsId` must exist in trade with `_tradeId`.
     *
     * @param _tradeId The id of the trade.
     * @param _itemsId The id of the counter offer items.
     */
    function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId) external;
}
