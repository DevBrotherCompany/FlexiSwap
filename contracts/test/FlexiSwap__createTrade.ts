// import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
// import { expect } from "chai";
// import { ethers } from "hardhat";
// import { FlexiSwap__factory, IFlexiSwap } from "../typechain-types";
// import { generateItems, mintTokens } from "./utils";

// describe("#createTrade", function () {
//   async function deployFlexiSwapFixture() {
//     const [owner, addr1, addr2] = await ethers.getSigners();
//     const FlexiSwap = (await ethers.getContractFactory(
//       "FlexiSwap"
//     )) as FlexiSwap__factory;
//     const hardhatFlexiSwap = await FlexiSwap.deploy();
//     await hardhatFlexiSwap.deployed();
//     return { owner, addr1, addr2, hardhatFlexiSwap };
//   }

//   it("should emit event when trade is created", async function () {
//     const { hardhatFlexiSwap, addr1 } = await loadFixture(
//       deployFlexiSwapFixture
//     );

//     const mintedGivings = await mintTokens()

//     const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

//     const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
//       generateItems(2),
//       generateItems(4),
//     ];

//     const tradeCreated = hardhatFlexiSwap
//       .connect(addr1)
//       .createTrade(_tradeGivings, _tradeReceivings);

//     expect(await tradeCreated).to.emit(hardhatFlexiSwap, "TradeCreated");
//   });

//   it("should revert when number of giving items is more than 10", async function () {
//     const { hardhatFlexiSwap, addr1 } = await loadFixture(
//       deployFlexiSwapFixture
//     );

//     const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(12);

//     const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
//       generateItems(2),
//       generateItems(4),
//     ];

//     const tradeCreated = hardhatFlexiSwap
//       .connect(addr1)
//       .createTrade(_tradeGivings, _tradeReceivings);

//     await expect(tradeCreated).to.be.revertedWithCustomError(
//       hardhatFlexiSwap,
//       "InvalidTradeOffersItemNumber"
//     );
//   });

//   it("should revert when number of items of receiving offer is more than 10", async function () {
//     const { hardhatFlexiSwap, addr1 } = await loadFixture(
//       deployFlexiSwapFixture
//     );

//     const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

//     const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
//       generateItems(12),
//       generateItems(4),
//     ];

//     const tradeCreated = hardhatFlexiSwap
//       .connect(addr1)
//       .createTrade(_tradeGivings, _tradeReceivings);

//     await expect(tradeCreated).to.be.revertedWithCustomError(
//       hardhatFlexiSwap,
//       "InvalidTradeOffersItemNumber"
//     );
//   });

//   it("should revert when number of receiving offers is more than 10", async function () {
//     const { hardhatFlexiSwap, addr1 } = await loadFixture(
//       deployFlexiSwapFixture
//     );

//     const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

//     const _tradeReceivings: IFlexiSwap.ItemStruct[][] = new Array(12).fill(
//       generateItems(2)
//     );

//     const tradeCreated = hardhatFlexiSwap
//       .connect(addr1)
//       .createTrade(_tradeGivings, _tradeReceivings);

//     await expect(tradeCreated).to.be.revertedWithCustomError(
//       hardhatFlexiSwap,
//       "InvalidTradeOffersNumber"
//     );
//   });

//   it("should revert when number of receiving offers is less or equal 0", async function () {
//     const { hardhatFlexiSwap, addr1 } = await loadFixture(
//       deployFlexiSwapFixture
//     );

//     const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

//     const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [];

//     const tradeCreated = hardhatFlexiSwap
//       .connect(addr1)
//       .createTrade(_tradeGivings, _tradeReceivings);

//     await expect(tradeCreated).to.be.revertedWithCustomError(
//       hardhatFlexiSwap,
//       "InvalidTradeOffersNumber"
//     );
//   });

//   it("should revert when number of items of receiving offer is less or equal 0", async function () {
//     const { hardhatFlexiSwap, addr1 } = await loadFixture(
//       deployFlexiSwapFixture
//     );

//     const _tradeGivings: IFlexiSwap.ItemStruct[] = generateItems(2);

//     const _tradeReceivings: IFlexiSwap.ItemStruct[][] = [
//       generateItems(0),
//       generateItems(4),
//     ];

//     const tradeCreated = hardhatFlexiSwap
//       .connect(addr1)
//       .createTrade(_tradeGivings, _tradeReceivings);

//     await expect(tradeCreated).to.be.revertedWithCustomError(
//       hardhatFlexiSwap,
//       "InvalidTradeOffersItemNumber"
//     );
//   });
// });
