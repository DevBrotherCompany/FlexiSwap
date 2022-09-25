//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./IFlexiSwap.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/interfaces/IERC721.sol";

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

    function verifyApproved(Item[] memory _itemsToVerify) private view {
        for (uint256 i = 0; i < _itemsToVerify.length; ++i) {
            if (
                IERC721(_itemsToVerify[i].nftAddress).getApproved(
                    _itemsToVerify[i].tokenId
                ) != address(this)
            ) {
                revert TokenNotApproved(
                    _itemsToVerify[i].nftAddress,
                    _itemsToVerify[i].tokenId
                );
            }
        }
    }

    function verifyAdditionalAssets(
        Item[] memory _orderItems,
        Item[] memory _additionalAssets
    ) private pure returns (bool) {
        uint256 _orderAdditionalAssetsCount = 0;
        for (uint256 i = 0; i < _additionalAssets.length; ++i) {
            for (uint256 j = 0; j < _orderItems.length; ++j) {
                if (_orderItems[j].isEmptyToken) {
                    _orderAdditionalAssetsCount++;
                }
            }
        }

        if (_orderAdditionalAssetsCount != _additionalAssets.length) {
            revert InvalidAdditionalAssets();
        }

        for (uint256 i = 0; i < _additionalAssets.length; ++i) {
            bool isFound = false;
            for (uint256 j = 0; j < _orderItems.length; ++j) {
                if (
                    _orderItems[j].isEmptyToken &&
                    _additionalAssets[j].nftAddress == _orderItems[i].nftAddress
                ) {
                    isFound = true;
                    break;
                }
            }
            if (!isFound) {
                revert InvalidAdditionalAssets();
            }
        }

        return true;
    }

    function batchTransfer(
        Item[] memory _itemsToTransfer,
        address _from,
        address _to
    ) private {
        for (uint256 i = 0; i < _itemsToTransfer.length; ++i) {
            Item memory itemToTransfer = _itemsToTransfer[i];
            IERC721(itemToTransfer.nftAddress).safeTransferFrom(
                _from,
                _to,
                itemToTransfer.tokenId
            );
        }
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
        Item[] memory givingItems = _items[givingItemsId];
        verifyApproved(givingItems);

        for (uint256 i = 0; i < _receivings.length; ++i) {
            uint256 receivingsItemsId = registerItemsToStorage(_receivings[i]);
            receivingItemsIdsList[i] = receivingsItemsId;
        }

        Trade memory _trade = Trade({
            initiator: msg.sender,
            givingsId: givingItemsId,
            receivingsIds: receivingItemsIdsList,
            counterOfferItemsIds: new uint256[](0)
        });

        _trades[tradeId] = _trade;

        emit TradeCreated(tradeId, _trade);
    }

    function acceptOffer(
        uint256 _tradeId,
        uint256 _itemsId,
        Item[] memory _additionalAssets
    ) public virtual override {
        Trade memory _trade = _trades[_tradeId];
        Item[] memory items_ = _items[_itemsId];

        bool validAdditionalAssets = verifyAdditionalAssets(
            items_,
            _additionalAssets
        );

        if (!validAdditionalAssets) {
            revert InvalidAdditionalAssets();
        }

        Item[] memory givings = _items[_trade.givingsId];

        verifyApproved(givings);

        batchTransfer(givings, _trade.initiator, msg.sender);
        batchTransfer(items_, msg.sender, _trade.initiator);
        batchTransfer(_additionalAssets, msg.sender, _trade.initiator);

        emit TradeAccepted(msg.sender, _tradeId, _itemsId);
    }

    function createCounterOffer(uint256 _tradeId, Item[] memory _offerItems)
        public
        virtual
        override
    {
        uint256 counterOfferItemsId = registerItemsToStorage(_offerItems);
        _trades[_tradeId].counterOfferItemsIds.push(counterOfferItemsId);
        _counterOfferInitiators[counterOfferItemsId] = msg.sender;
        Item[] memory counterOfferItems = _items[counterOfferItemsId];
        verifyApproved(counterOfferItems);

        emit CounterOfferCreated(msg.sender, _tradeId, counterOfferItemsId);
    }

    function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId)
        public
        virtual
        override
    {
        Trade memory _trade = _trades[_tradeId];
        Item[] memory items_ = _items[_itemsId];
        Item[] memory givings = _items[_trade.givingsId];

        address counterOfferInitiator = _counterOfferInitiators[_itemsId];

        batchTransfer(givings, _trade.initiator, counterOfferInitiator);
        batchTransfer(items_, counterOfferInitiator, _trade.initiator);

        emit CounterOfferAccepted(_tradeId, _itemsId);
    }
}
