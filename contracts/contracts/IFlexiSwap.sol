//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

interface IFlexiSwap {
    struct Trade {
        address initiator;
        uint256 givingsId;
        uint256[] receivingsIds;
        uint256[] counterOffersIds;
    }

    struct Item {
        address nftAddress;
        uint256 tokenId;
        bool isEmptyToken;
    }

    error TradeDoesNotExist(uint256 tradeId);
    error OfferDoesNotExist(uint256 tradeId, uint256 itemsId);
    error CounterOfferDoesNotExist(uint256 tradeId, uint256 itemsId);
    error InvalidTradeOffersNumber();
    error InvalidTradeOffersItemNumber();
    error TradeOwnerOnly();
    error InvalidForTradeOwner();

    event TradeCreated(
        uint256 tradeId,
        Trade trade,
        Item[] givings,
        Item[][] receivings
    );
    event TradeAccepted(address accepter, int256 tradeId, uint256 itemsId);
    event CounterOfferCreated(
        address counterOfferer,
        uint256 tradeId,
        uint256 itemsId,
        Item[] offerItems
    );
    event CounterOfferAccepted(uint256 tradeId, uint256 itemsId);

    function createTrade(Item[] memory _givings, Item[][] memory _receivings)
        external;

    function acceptOffer(uint256 _tradeId, uint256 _itemsId) external;

    function createCounterOffer(uint256 _tradeId, Item[] memory _offerItems)
        external;

    function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId) external;
}
