import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import { expect } from "chai";
import { ethers } from "hardhat";
import { FlexiSwap__factory, IFlexiSwap } from "../typechain-types";
import { generateItems } from "./utils";

describe("#createCounterOffer", function () {
  async function deployFlexiSwapFixture() {
    const [owner, addr1, addr2] = await ethers.getSigners();
    const FlexiSwap = (await ethers.getContractFactory(
      "FlexiSwap"
    )) as FlexiSwap__factory;
    const hardhatFlexiSwap = await FlexiSwap.deploy();
    await hardhatFlexiSwap.deployed();
    return { owner, addr1, addr2, hardhatFlexiSwap };
  }
  it("should emit event when counter offer is created", async function () {
    const { hardhatFlexiSwap, addr1, addr2 } = await loadFixture(
      deployFlexiSwapFixture
    );

    const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

    const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
      generateItems(2),
      generateItems(4),
    ];

    await hardhatFlexiSwap
      .connect(addr1)
      .createTrade(_tradeGivings, _tradeReceivings);

    const tradeId = 1;

    const _counterOfferItems: IFlexiSwap.ItemStruct[] = generateItems(2);

    const counterOfferCreated = hardhatFlexiSwap
      .connect(addr2)
      .createCounterOffer(tradeId, _counterOfferItems);

    expect(await counterOfferCreated).to.emit(
      hardhatFlexiSwap,
      "CounterOfferCreated"
    );
  });

  it("should revert if trade does not exist", async function () {
    const { hardhatFlexiSwap, addr1, addr2 } = await loadFixture(
      deployFlexiSwapFixture
    );

    const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

    const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
      generateItems(2),
      generateItems(4),
    ];

    await hardhatFlexiSwap
      .connect(addr1)
      .createTrade(_tradeGivings, _tradeReceivings);

    const tradeId = 1337;

    const _counterOfferItems: IFlexiSwap.ItemStruct[] = generateItems(2);

    const counterOfferCreated = hardhatFlexiSwap
      .connect(addr2)
      .createCounterOffer(tradeId, _counterOfferItems);

    await expect(counterOfferCreated).to.be.revertedWithCustomError(
      hardhatFlexiSwap,
      "TradeDoesNotExist"
    );
  });

  it("should revert when number of counter offer items is more than 10", async function () {
    const { hardhatFlexiSwap, addr1, addr2 } = await loadFixture(
      deployFlexiSwapFixture
    );

    const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

    const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
      generateItems(2),
      generateItems(4),
    ];

    await hardhatFlexiSwap
      .connect(addr1)
      .createTrade(_tradeGivings, _tradeReceivings);

    const tradeId = 1;

    const _counterOfferItems: IFlexiSwap.ItemStruct[] = generateItems(12);

    const counterOfferCreated = hardhatFlexiSwap
      .connect(addr2)
      .createCounterOffer(tradeId, _counterOfferItems);

    await expect(counterOfferCreated).to.be.revertedWithCustomError(
      hardhatFlexiSwap,
      "InvalidTradeOffersItemNumber"
    );
  });

  it("should revert when number of counter offer items is less of equal 0", async function () {
    const { hardhatFlexiSwap, addr1, addr2 } = await loadFixture(
      deployFlexiSwapFixture
    );

    const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

    const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
      generateItems(2),
      generateItems(4),
    ];

    await hardhatFlexiSwap
      .connect(addr1)
      .createTrade(_tradeGivings, _tradeReceivings);

    const tradeId = 1;

    const _counterOfferItems: IFlexiSwap.ItemStruct[] = generateItems(0);

    const counterOfferCreated = hardhatFlexiSwap
      .connect(addr2)
      .createCounterOffer(tradeId, _counterOfferItems);

    await expect(counterOfferCreated).to.be.revertedWithCustomError(
      hardhatFlexiSwap,
      "InvalidTradeOffersItemNumber"
    );
  });

  it("should revert if called by trade creator", async function () {
    const { hardhatFlexiSwap, addr1, addr2 } = await loadFixture(
      deployFlexiSwapFixture
    );

    const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

    const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
      generateItems(2),
      generateItems(4),
    ];

    await hardhatFlexiSwap
      .connect(addr1)
      .createTrade(_tradeGivings, _tradeReceivings);

    const tradeId = 1;

    const _counterOfferItems: IFlexiSwap.ItemStruct[] = generateItems(2);

    const counterOfferCreated = hardhatFlexiSwap
      .connect(addr1)
      .createCounterOffer(tradeId, _counterOfferItems);

    await expect(counterOfferCreated).to.be.revertedWithCustomError(
      hardhatFlexiSwap,
      "InvalidForTradeOwner"
    );
  });

  it("should revert if called twice by the same user", async function () {
    const { hardhatFlexiSwap, addr1, addr2 } = await loadFixture(
      deployFlexiSwapFixture
    );

    const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

    const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
      generateItems(2),
      generateItems(4),
    ];

    await hardhatFlexiSwap
      .connect(addr1)
      .createTrade(_tradeGivings, _tradeReceivings);

    const tradeId = 1;

    const _counterOfferItems: IFlexiSwap.ItemStruct[] = generateItems(2);

    await hardhatFlexiSwap
      .connect(addr2)
      .createCounterOffer(tradeId, _counterOfferItems);

    const counterOfferCreated = hardhatFlexiSwap
      .connect(addr2)
      .createCounterOffer(tradeId, _counterOfferItems);

    await expect(counterOfferCreated).to.be.revertedWithCustomError(
      hardhatFlexiSwap,
      "CounterOfferAlreadyExists"
    );
  });
});
