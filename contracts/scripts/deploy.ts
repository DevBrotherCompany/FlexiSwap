import { ethers } from 'hardhat';

async function main() {
  const flexiSwapFactory = await ethers.getContractFactory('FlexiSwap');
  const flexiSwap = await flexiSwapFactory.deploy();
  await flexiSwap.deployed();

  console.log(`FlexiSwap deployed to ${flexiSwap.address}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
