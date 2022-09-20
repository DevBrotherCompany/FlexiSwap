const fs = require('fs');
const path = require('path');

const abi = require('../../contracts/abi/contracts/FlexiSwap.sol/FlexiSwap.json');

const filteredAbi = abi.filter((item) => item.name !== 'createTrade');
fs.writeFileSync(
  path.resolve(process.cwd(), 'abi', 'FlexiSwap.json'),
  JSON.stringify(filteredAbi),
);
