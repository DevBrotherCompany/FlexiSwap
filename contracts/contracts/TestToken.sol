//SPDX-License-Identifier: MIT
pragma solidity ^0.8.15;

import "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import "@openzeppelin/contracts/utils/Counters.sol";

contract TestToken is ERC721 {
    using Counters for Counters.Counter;

    Counters.Counter private _tokenIds;

    constructor() ERC721("TestToken", "TT") {}

    function mint(address to, uint256 count) public {
        for (uint256 i = 0; i < count; ++i) {
            _mint(to, _tokenIds.current());
            _tokenIds.increment();
        }
    }
}
