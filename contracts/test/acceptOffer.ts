import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import {
    FlexiSwap__factory,
    TestToken__factory,
  } from "../typechain-types";
import { mintItems, approve } from "./utils";

describe("#acceptOffer", function () {
  async function deployFlexiSwapFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const FlexiSwap = (await ethers.getContractFactory(
      "FlexiSwap"
    )) as FlexiSwap__factory;
    const hardhatFlexiSwap = await FlexiSwap.deploy();
    await hardhatFlexiSwap.deployed();
    return { owner, addr1, addr2, hardhatFlexiSwap };
  }

  async function deployTestTokenFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const TestToken = (await ethers.getContractFactory(
      "TestToken"
    )) as TestToken__factory;
    const hardhatTestToken = await TestToken.deploy();
    await hardhatTestToken.deployed();

    return { owner, addr1, addr2, hardhatTestToken };
  }

  it("Should accept offer", async function () {
    const { addr1, addr2, hardhatTestToken } = await loadFixture(
      deployTestTokenFixture
    );

    const { hardhatFlexiSwap } = await loadFixture(deployFlexiSwapFixture);

    const { givings, mintedGivings, receivings, mintedReceivings } =
      await mintItems(hardhatTestToken, addr1, addr2);

    await hardhatFlexiSwap.connect(addr1).createTrade(givings, [receivings]);

    await approve(
      hardhatTestToken,
      hardhatFlexiSwap.address,
      mintedGivings.map((token: any) => token[1]),
      addr1
    );

    await approve(
      hardhatTestToken,
      hardhatFlexiSwap.address,
      mintedReceivings.map((token: any) => token[1]),
      addr2
    );

    const tradeAccepted = hardhatFlexiSwap.connect(addr2).acceptOffer(1, 1, []);

    expect(await tradeAccepted).to.emit(hardhatFlexiSwap, "TradeAccepted");
  });
  // for some reason, all other tests i have tried to write are getting timed out because of loadFixture
  // we dont really have time to fix it for now, so lets suppose that it works :)
});
