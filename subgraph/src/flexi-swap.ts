import {
  TradeCreated,
  CounterOfferAccepted,
  CounterOfferCreated,
  TradeAccepted,
} from "../generated/FlexiSwap/FlexiSwap"
import {
  GivingsOffer,
  GivingsOfferItem,
  ReceivingsOffer,
  ReceivingsOfferItem,
  Trade,
} from "../generated/schema"

export function handleTradeCreated(event: TradeCreated): void {
  const tradeId = event.params.tradeId.toString();
  const trade = new Trade(tradeId);
  trade.createdAt = event.block.timestamp.toI32();
  trade.initiatorAddress = event.params.trade.initiator;
  trade.save();

  const givings = new GivingsOffer(trade.id);
  givings.trade = trade.id;
  givings.save();

  for (let i = 0; i < event.params.trade.givings.items.length; i++) {
    const itemId = trade.id + i.toString();
    const item = new GivingsOfferItem(itemId);
    item.tokenAddress = event.params.trade.givings.items[i].nftAddress;
    item.tokenId = event.params.trade.givings.items[i].tokenId;
    item.offer = givings.id;
    item.save();
  }

  for (let i = 0; i < event.params.trade.receivings.length; i++) {
    const receivingsId = event.params.tradeId.toString() + i.toString();
    const receivings = new ReceivingsOffer(receivingsId);
    receivings.trade = trade.id;
    receivings.save();

    for (let j = 0; j < event.params.trade.receivings[i].items.length; j++) {
      const itemId = receivings.id + j.toString();
      const item = new ReceivingsOfferItem(itemId);
      item.tokenAddress = event.params.trade.receivings[i].items[j].nftAddress;
      item.tokenId = event.params.trade.receivings[i].items[j].isEmptyToken
        ? null
        : event.params.trade.receivings[i].items[j].tokenId;
      item.save();
    }
  }
}

export function handleCounterOfferAccepted(event: CounterOfferAccepted): void {}

export function handleCounterOfferCreated(event: CounterOfferCreated): void {}

export function handleTradeAccepted(event: TradeAccepted): void {}
