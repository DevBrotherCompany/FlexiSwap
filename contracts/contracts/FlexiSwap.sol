//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "./IFlexiSwap.sol";

contract FlexiSwap is IFlexiSwap {
    constructor() {
        // constructor
    }

    function createTrade(Offer memory givings, Offer[] memory receivings) external  {
        revert("Not implemented");
    }

    function acceptOffer(uint256 tradeId, uint256 offerIndex) external override {
        revert("Not implemented");
    }

    function createCounterOffer(uint256 tradeId, Offer memory offer) external override {
        revert("Not implemented");
    }

    function acceptCounterOffer(uint256 tradeId, uint256 counterOfferIndex) external override {
        revert("Not implemented");
    }
}
