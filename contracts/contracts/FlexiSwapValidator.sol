pragma solidity ^0.8.15;

import "./FlexiSwapCore.sol";
import "@openzeppelin/contracts/interfaces/IERC721.sol";

contract FlexiSwapValidator is FlexiSwapCore {
    uint256 private MAX_OFFER_ITEMS = 10;
    uint256 private MAX_OFFERS_PER_TRADE = 10;

    constructor() {
        // constructor
    }

    modifier tradeExists(uint256 tradeId) {
        if (_trades[tradeId].initiator == address(0)) {
            revert TradeDoesNotExist(tradeId);
        }
        _;
    }

    modifier offerExists(uint256 tradeId, uint256 itemsId) {
        Trade memory trade = _trades[tradeId];
        for (uint256 i = 0; i < trade.receivingsIds.length; i++) {
            if (trade.receivingsIds[i] == itemsId) {
                _;
                return;
            }
        }

        revert OfferDoesNotExist(tradeId, itemsId);
    }

    modifier counterOfferExists(uint256 tradeId, uint256 itemsId) {
        Trade memory trade = _trades[tradeId];
        for (uint256 i = 0; i < trade.counterOfferItemsIds.length; i++) {
            if (trade.counterOfferItemsIds[i] == itemsId) {
                _;
                return;
            }
        }

        revert CounterOfferDoesNotExist(tradeId, itemsId);
    }

    // validates whether the trade has at least one offer and not more than MAX_OFFERS_PER_TRADE
    modifier validOffersNumber(Item[][] memory receivings) {
        if (
            receivings.length == 0 || receivings.length > MAX_OFFERS_PER_TRADE
        ) {
            revert InvalidTradeOffersNumber();
        }
        _;
    }

    // validates whether the trade offers includes at least one item and not more than MAX_OFFER_ITEMS
    modifier validOffersItemNumber(Item[][] memory receivings) {
        for (uint256 i = 0; i < receivings.length; i++) {
            if (
                receivings[i].length == 0 ||
                receivings[i].length > MAX_OFFER_ITEMS
            ) {
                revert InvalidTradeOffersItemNumber();
            }
        }
        _;
    }

    // validates whether the offer includes at least one item and not more than MAX_OFFER_ITEMS
    modifier validOfferItemNumber(Item[] memory offerItems) {
        if (offerItems.length == 0 || offerItems.length > MAX_OFFER_ITEMS) {
            revert InvalidTradeOffersItemNumber();
        }
        _;
    }

    modifier notTradeOwner(uint256 tradeId) {
        if (_trades[tradeId].initiator == msg.sender) {
            revert InvalidForTradeOwner();
        }
        _;
    }

    modifier isTradeOwner(uint256 tradeId) {
        if (_trades[tradeId].initiator != msg.sender) {
            revert TradeOwnerOnly();
        }
        _;
    }

    modifier notExistingCounterOffer(uint256 tradeId, address counterOfferer) {
        Trade memory trade = _trades[tradeId];
        for (uint256 i = 0; i < trade.counterOfferItemsIds.length; i++) {
            uint counterOfferItemsId = trade.counterOfferItemsIds[i];
            if (
                counterOfferer == _counterOfferInitiators[counterOfferItemsId]
            ) {
                revert CounterOfferAlreadyExists(tradeId, counterOfferItemsId);
            }
        }
        _;
    }

    function createTrade(Item[] memory _givings, Item[][] memory _receivings)
        public
        virtual
        override
        validOffersNumber(_receivings)
        validOffersItemNumber(_receivings)
        validOfferItemNumber(_givings)
    {
        super.createTrade(_givings, _receivings);
    }

    function acceptOffer(
        uint256 _tradeId,
        uint256 _itemsId,
        Item[] memory _additionalAssets
    )
        public
        virtual
        override
        tradeExists(_tradeId)
        notTradeOwner(_tradeId)
        offerExists(_tradeId, _itemsId)
    {
        super.acceptOffer(_tradeId, _itemsId, _additionalAssets);
    }

    function createCounterOffer(uint256 _tradeId, Item[] memory _offerItems)
        public
        virtual
        override
        tradeExists(_tradeId)
        notTradeOwner(_tradeId)
        notExistingCounterOffer(_tradeId, msg.sender)
        validOfferItemNumber(_offerItems)
    {
        super.createCounterOffer(_tradeId, _offerItems);
    }

    function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId)
        public
        virtual
        override
        tradeExists(_tradeId)
        isTradeOwner(_tradeId)
        counterOfferExists(_tradeId, _itemsId)
    {
        super.acceptCounterOffer(_tradeId, _itemsId);
    }
}
