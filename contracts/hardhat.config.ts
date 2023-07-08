import * as dotenv from 'dotenv';

import '@nomicfoundation/hardhat-toolbox';
import '@nomiclabs/hardhat-ganache';
import 'hardhat-abi-exporter';
import { HardhatUserConfig } from 'hardhat/config';
import 'solidity-docgen';

dotenv.config();

const config: HardhatUserConfig = {
  solidity: '0.8.15',
  networks: {
    goerli: {
      url: process.env.GOERLI_URL ?? '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
    polygon: {
      url: process.env.POLYGON_URL ?? '',
      accounts:
        process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY ?? '',
      polygon: process.env.POLYGONSCAN_API_KEY ?? '',
    },
  },
  abiExporter: {
    runOnCompile: true,
    clear: true,
  },
  docgen: {
    outputDir: './docs/generated',
    templates: './docs/templates',
    pages: 'files',
    exclude: ['TestToken.sol', 'FlexiSwap.sol', 'FlexiSwapCore.sol'],
  },
};

export default config;
