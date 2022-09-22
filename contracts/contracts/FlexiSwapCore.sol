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

    function verifyApproved(Item[] memory _itemsToVerify) private {
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
    ) private returns (bool) {
        for (uint256 i = 0; i < _additionalAssets.length; ++i) {
            for (uint256 j = 0; j < _orderItems.length; ++j) {
                if (
                    !_orderItems[j].isEmptyToken &&
                    _orderItems[j].nftAddress == _additionalAssets[i].nftAddress
                ) {
                    // TODO
                    // _additionalAssets[i] = _additionalAssets[_additionalAssets.length - 1];
                    // delete _additionalAssets[_additionalAssets.length - 1];
                    // _additionalAssets.length--;
                }
            }
        }

        return _additionalAssets.length == 0;
    }

    function batchTransfer(
        Item[] memory _itemsToTransfer,
        address _from,
        address _to
    ) private {
        verifyApproved(_itemsToTransfer);

        for (uint256 i = 0; i < _itemsToTransfer.length; ++i) {
            IERC721(_itemsToTransfer[i].nftAddress).safeTransferFrom(
                _from,
                _to,
                _itemsToTransfer[i].tokenId
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

    // additionalAssets is a list of additional assets that the initiator wants to receive in addition to the items in the trade
    // for exmple, if trade initiator stated that he wants 2 nfts from collection A in addition, then additionalAssets
    // should contain strictly 2 nfts from collection A
    function acceptOffer(
        uint256 _tradeId,
        uint256 _itemsId,
        Item[] memory _additionalAssets
    ) public virtual override {
        Trade memory trade = _trades[_tradeId];
        Item[] memory items = _items[_itemsId];

        bool validAdditionalAssets = verifyAdditionalAssets(
            items,
            _additionalAssets
        );

        if (!validAdditionalAssets) {
            revert InvalidAdditionalAssets();
        }

        // TODO
        // for (uint256 i = 0; i < _additionalAssets.length; ++i) {
        //     items.push(_additionalAssets[i]);
        // }

        Item[] memory givings = _items[trade.givingsId];

        batchTransfer(givings, trade.initiator, msg.sender);
        batchTransfer(items, msg.sender, trade.initiator);

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

        emit CounterOfferCreated(msg.sender, _tradeId, counterOfferItemsId);
    }

    function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId)
        public
        virtual
        override
    {
        revert("Not implemented");
    }
}
