// TODO: Import abis from @flexiswap/contracts
export const FLEXISWAP_ADDRESS = '0x27a46a554054924Fdb21e60d08F067352411D7E1';

export const FLEXISWAP_ABI = [
  {
    'inputs': [],
    'stateMutability': 'nonpayable',
    'type': 'constructor'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tradeId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'counterOfferItemsId',
        'type': 'uint256'
      }
    ],
    'name': 'CounterOfferAlreadyExists',
    'type': 'error'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tradeId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'itemsId',
        'type': 'uint256'
      }
    ],
    'name': 'CounterOfferDoesNotExist',
    'type': 'error'
  },
  {
    'inputs': [],
    'name': 'InvalidForTradeOwner',
    'type': 'error'
  },
  {
    'inputs': [],
    'name': 'InvalidTradeOffersItemNumber',
    'type': 'error'
  },
  {
    'inputs': [],
    'name': 'InvalidTradeOffersNumber',
    'type': 'error'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tradeId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': 'itemsId',
        'type': 'uint256'
      }
    ],
    'name': 'OfferDoesNotExist',
    'type': 'error'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tradeId',
        'type': 'uint256'
      }
    ],
    'name': 'TradeDoesNotExist',
    'type': 'error'
  },
  {
    'inputs': [],
    'name': 'TradeOwnerOnly',
    'type': 'error'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'tradeId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'itemsId',
        'type': 'uint256'
      }
    ],
    'name': 'CounterOfferAccepted',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': 'counterOfferer',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'tradeId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'itemsId',
        'type': 'uint256'
      }
    ],
    'name': 'CounterOfferCreated',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'address',
        'name': 'accepter',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'tradeId',
        'type': 'uint256'
      },
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'itemsId',
        'type': 'uint256'
      }
    ],
    'name': 'TradeAccepted',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': false,
        'internalType': 'uint256',
        'name': 'tradeId',
        'type': 'uint256'
      },
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'initiator',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'givingsId',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256[]',
            'name': 'receivingsIds',
            'type': 'uint256[]'
          },
          {
            'internalType': 'uint256[]',
            'name': 'counterOfferItemsIds',
            'type': 'uint256[]'
          }
        ],
        'indexed': false,
        'internalType': 'struct IFlexiSwap.Trade',
        'name': 'trade',
        'type': 'tuple'
      }
    ],
    'name': 'TradeCreated',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_tradeId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_itemsId',
        'type': 'uint256'
      }
    ],
    'name': 'acceptCounterOffer',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_tradeId',
        'type': 'uint256'
      },
      {
        'internalType': 'uint256',
        'name': '_itemsId',
        'type': 'uint256'
      }
    ],
    'name': 'acceptOffer',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_tradeId',
        'type': 'uint256'
      },
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'nftAddress',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'tokenId',
            'type': 'uint256'
          },
          {
            'internalType': 'bool',
            'name': 'isEmptyToken',
            'type': 'bool'
          }
        ],
        'internalType': 'struct IFlexiSwap.Item[]',
        'name': '_offerItems',
        'type': 'tuple[]'
      }
    ],
    'name': 'createCounterOffer',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'nftAddress',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'tokenId',
            'type': 'uint256'
          },
          {
            'internalType': 'bool',
            'name': 'isEmptyToken',
            'type': 'bool'
          }
        ],
        'internalType': 'struct IFlexiSwap.Item[]',
        'name': '_givings',
        'type': 'tuple[]'
      },
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'nftAddress',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'tokenId',
            'type': 'uint256'
          },
          {
            'internalType': 'bool',
            'name': 'isEmptyToken',
            'type': 'bool'
          }
        ],
        'internalType': 'struct IFlexiSwap.Item[][]',
        'name': '_receivings',
        'type': 'tuple[][]'
      }
    ],
    'name': 'createTrade',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_itemsId',
        'type': 'uint256'
      }
    ],
    'name': 'items',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'nftAddress',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'tokenId',
            'type': 'uint256'
          },
          {
            'internalType': 'bool',
            'name': 'isEmptyToken',
            'type': 'bool'
          }
        ],
        'internalType': 'struct IFlexiSwap.Item[]',
        'name': '',
        'type': 'tuple[]'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': '_tradeId',
        'type': 'uint256'
      }
    ],
    'name': 'trade',
    'outputs': [
      {
        'components': [
          {
            'internalType': 'address',
            'name': 'initiator',
            'type': 'address'
          },
          {
            'internalType': 'uint256',
            'name': 'givingsId',
            'type': 'uint256'
          },
          {
            'internalType': 'uint256[]',
            'name': 'receivingsIds',
            'type': 'uint256[]'
          },
          {
            'internalType': 'uint256[]',
            'name': 'counterOfferItemsIds',
            'type': 'uint256[]'
          }
        ],
        'internalType': 'struct IFlexiSwap.Trade',
        'name': '',
        'type': 'tuple'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  }
];

export const IERC721_ABI = [
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'approved',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'Approval',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'indexed': false,
        'internalType': 'bool',
        'name': 'approved',
        'type': 'bool'
      }
    ],
    'name': 'ApprovalForAll',
    'type': 'event'
  },
  {
    'anonymous': false,
    'inputs': [
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'indexed': true,
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'Transfer',
    'type': 'event'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'approve',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      }
    ],
    'name': 'balanceOf',
    'outputs': [
      {
        'internalType': 'uint256',
        'name': 'balance',
        'type': 'uint256'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'getApproved',
    'outputs': [
      {
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      }
    ],
    'name': 'isApprovedForAll',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'ownerOf',
    'outputs': [
      {
        'internalType': 'address',
        'name': 'owner',
        'type': 'address'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      },
      {
        'internalType': 'bytes',
        'name': 'data',
        'type': 'bytes'
      }
    ],
    'name': 'safeTransferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'operator',
        'type': 'address'
      },
      {
        'internalType': 'bool',
        'name': '_approved',
        'type': 'bool'
      }
    ],
    'name': 'setApprovalForAll',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'bytes4',
        'name': 'interfaceId',
        'type': 'bytes4'
      }
    ],
    'name': 'supportsInterface',
    'outputs': [
      {
        'internalType': 'bool',
        'name': '',
        'type': 'bool'
      }
    ],
    'stateMutability': 'view',
    'type': 'function'
  },
  {
    'inputs': [
      {
        'internalType': 'address',
        'name': 'from',
        'type': 'address'
      },
      {
        'internalType': 'address',
        'name': 'to',
        'type': 'address'
      },
      {
        'internalType': 'uint256',
        'name': 'tokenId',
        'type': 'uint256'
      }
    ],
    'name': 'transferFrom',
    'outputs': [],
    'stateMutability': 'nonpayable',
    'type': 'function'
  }
];
