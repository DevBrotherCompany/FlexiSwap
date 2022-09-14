//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./IFlexiSwap.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract FlexiSwapCore is IFlexiSwap {
    using Counters for Counters.Counter;

    Counters.Counter internal _tradeIds;
    Counters.Counter internal _itemsIds;

    // tradeId => trade
    mapping(uint256 => Trade) internal _trades;

    // itemsId => items[]
    mapping(uint256 => Item[]) internal _items;

    // itemsId => initiatorAddress
    mapping(uint256 => address) internal _counterOfferInitiators;

    constructor() {
        // constructor
    }

    function registerItemsToStorage(Item[] memory _itemsToRegister)
        private
        returns (uint256)
    {
        uint256 itemsId = _itemsIds.current();
        _itemsIds.increment();
        for (uint256 i = 0; i < _itemsToRegister.length; i++) {
            _items[itemsId].push(_itemsToRegister[i]);
        }
        return itemsId;
    }

    function trade(uint256 _tradeId) external view returns (Trade memory) {
        return _trades[_tradeId];
    }

    function items(uint256 _itemsId) external view returns (Item[] memory) {
        return _items[_itemsId];
    }

    function createTrade(Item[] memory _givings, Item[][] memory _receivings)
        public
        virtual
        override
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
            counterOfferItemsIds: new uint256[](0)
        });

        _trades[tradeId] = trade;

        emit TradeCreated(tradeId, trade);
    }

    function acceptOffer(uint256 _tradeId, uint256 _itemsId)
        public
        virtual
        override
    {
        revert("Not implemented");
    }

    function createCounterOffer(uint256 _tradeId, Item[] memory _offerItems)
        public
        virtual
        override
    {
        uint256 counterOfferItemsId = registerItemsToStorage(_offerItems);

        _trades[_tradeId].counterOfferItemsIds.push(counterOfferItemsId);

        _counterOfferInitiators[counterOfferItemsId] = msg.sender;

        emit CounterOfferCreated(
            msg.sender,
            _tradeId,
            counterOfferItemsId,
            _offerItems
        );
    }

    function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId)
        public
        virtual
        override
    {
        revert("Not implemented");
    }
}
