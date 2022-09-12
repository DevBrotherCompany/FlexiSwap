//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./IFlexiSwap.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract FlexiSwap is IFlexiSwap {
    using Counters for Counters.Counter;

    Counters.Counter private _tradeIds;
    Counters.Counter private _itemsIds;

    // tradeId => trade
    mapping(uint256 => Trade) private trades;

    // itemsId => items[]
    mapping(uint256 => Item[]) items;

    // itemsId => initiatorAddress
    mapping(uint256 => address) counterOfferInitiators;

    uint256 private MAX_OFFER_ITEMS = 10;
    uint256 private MAX_OFFERS_PER_TRADE = 10;

    constructor() {
        // constructor
    }

    modifier tradeExists(uint256 tradeId) {
        if (trades[tradeId].initiator == address(0)) {
            revert TradeDoesNotExist(tradeId);
        }
        _;
    }

    modifier offerExists(uint256 tradeId, uint256 itemsId) {
        Trade memory trade = trades[tradeId];
        for (uint256 i = 0; i < trade.receivingsIds.length; i++) {
            if (trade.receivingsIds[i] == itemsId) {
                _;
                return;
            }
        }

        revert OfferDoesNotExist(tradeId, itemsId);
    }

    modifier counterOfferExists(uint256 tradeId, uint256 itemsId) {
        Trade memory trade = trades[tradeId];
        for (uint256 i = 0; i < trade.counterOffersIds.length; i++) {
            if (trade.counterOffersIds[i] == itemsId) {
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
        if (trades[tradeId].initiator == msg.sender) {
            revert InvalidForTradeOwner();
        }
        _;
    }

    modifier isTradeOwner(uint256 tradeId) {
        if (trades[tradeId].initiator != msg.sender) {
            revert TradeOwnerOnly();
        }
        _;
    }

    function registerItemsToStorage(Item[] memory _itemsToRegister)
        private
        returns (uint256)
    {
        uint256 itemsId = _itemsIds.current();
        _itemsIds.increment();
        for (uint256 i = 0; i < _itemsToRegister.length; i++) {
            items[itemsId].push(_itemsToRegister[i]);
        }
        return itemsId;
    }

    function createTrade(Item[] memory _givings, Item[][] memory _receivings)
        external
        validOffersNumber(_receivings)
        validOffersItemNumber(_receivings)
        validOfferItemNumber(_givings)
    {
        _tradeIds.increment();
        uint256 tradeId = _tradeIds.current();

        uint256[] memory receivingItemsIdsList = new uint256[](
            _receivings.length
        );

        uint256 givingItemsId = registerItemsToStorage(_givings);

        for (uint256 i = 0; i < _receivings.length; ++i) {
            uint256 receivingsItemsId = registerItemsToStorage(_receivings[i]);
            receivingItemsIdsList[i] = receivingsItemsId;
        }

        Trade memory trade = Trade({
            initiator: msg.sender,
            givingsId: givingItemsId,
            receivingsIds: receivingItemsIdsList,
            counterOffersIds: new uint256[](0)
        });

        trades[tradeId] = trade;

        emit TradeCreated(tradeId, trade, _givings, _receivings);
    }

    function acceptOffer(uint256 _tradeId, uint256 _itemsId) external {
        revert("Not implemented");
    }

    function createCounterOffer(uint256 _tradeId, Item[] memory _offerItems)
        external
        tradeExists(_tradeId)
        notTradeOwner(_tradeId)
        validOfferItemNumber(_offerItems)
    {
        uint256 counterOfferItemsId = registerItemsToStorage(_offerItems);

        trades[_tradeId].counterOffersIds.push(counterOfferItemsId);

        emit CounterOfferCreated(
            msg.sender,
            _tradeId,
            counterOfferItemsId,
            _offerItems
        );
    }

    function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId) external {
        revert("Not implemented");
    }
}
