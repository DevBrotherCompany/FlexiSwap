//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

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

    error TradeDoesNotExist(uint256 tradeId);
    error OfferDoesNotExist(uint256 tradeId, uint256 itemsId);
    error CounterOfferDoesNotExist(uint256 tradeId, uint256 itemsId);
    error CounterOfferAlreadyExists(
        uint256 tradeId,
        uint256 counterOfferItemsId
    );
    error InvalidTradeOffersNumber();
    error InvalidTradeOffersItemNumber();
    error TradeOwnerOnly();
    error InvalidForTradeOwner();
    error TokenNotApproved(address nftAddress, uint256 tokenId);
    error InvalidAdditionalAssets();

    event TradeCreated(uint256 tradeId, Trade trade);
    event TradeAccepted(address accepter, uint256 tradeId, uint256 itemsId);
    event CounterOfferCreated(
        address counterOfferer,
        uint256 tradeId,
        uint256 itemsId
    );
    event CounterOfferAccepted(uint256 tradeId, uint256 itemsId);

    function trade(uint256 _tradeId) external view returns (Trade memory);

    function items(uint256 _itemsId) external view returns (Item[] memory);

    function createTrade(Item[] memory _givings, Item[][] memory _receivings)
        external;

    // additionalAssets is a list of additional assets that the initiator wants to receive in addition to the items in the trade
    // for exmple, if trade initiator stated that he wants 2 nfts from collection A in addition, then additionalAssets
    // should contain strictly 2 nfts from collection A
    function acceptOffer(uint256 _tradeId, uint256 _itemsId, Item[] memory _additionalAssets) external;

    function createCounterOffer(uint256 _tradeId, Item[] memory _offerItems)
        external;

    function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId) external;
}
