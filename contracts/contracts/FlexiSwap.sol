//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./FlexiSwapValidator.sol";
import "./FlexiSwapCore.sol";
import "./IFlexiSwap.sol";

contract FlexiSwap is FlexiSwapValidator {
    constructor() {
        // constructor
    }

    function createTrade(Item[] memory _givings, Item[][] memory _receivings)
        public
        virtual
        override
    {
        super.createTrade(_givings, _receivings);
    }

    function acceptOffer(uint256 _tradeId, uint256 _itemsId)
        public
        virtual
        override
    {
        super.acceptOffer(_tradeId, _itemsId);
    }

    function createCounterOffer(uint256 _tradeId, Item[] memory _offerItems)
        public
        virtual
        override
    {
        super.createCounterOffer(_tradeId, _offerItems);
    }

    function acceptCounterOffer(uint256 _tradeId, uint256 _itemsId)
        public
        virtual
        override
    {
        super.acceptCounterOffer(_tradeId, _itemsId);
    }
}
