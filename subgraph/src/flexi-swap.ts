import {
  CounterOfferAccepted,
  CounterOfferCreated,
  TradeAccepted,
  TradeCreated,
} from "../generated/FlexiSwap/FlexiSwap"
import {
  CounterOffer, CounterOfferItem,
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

export function handleTradeAccepted(event: TradeAccepted): void {
  const tradeId = event.params.tradeId.toString();
  const trade = new Trade(tradeId);
  trade.finishedAt = event.block.timestamp.toI32();
  trade.acceptedReceivingsOffer = trade.id + event.params.offerIndex.toString();
  trade.counterAgentAddress = event.params.accepter;
  trade.save();
}

export function handleCounterOfferCreated(event: CounterOfferCreated): void {
  const tradeId = event.params.tradeId.toString();
  const offerId = tradeId + event.params.counterOfferIndex.toString();
  const offer = new CounterOffer(offerId);
  offer.offererAddress = event.params.counterOfferer;
  offer.trade = tradeId;
  offer.save();

  for (let i = 0; i < event.params.counterOffer.items.length; i++) {
    const itemId = offer.id + i.toString();
    const item = new CounterOfferItem(itemId);
    item.tokenAddress = event.params.counterOffer.items[i].nftAddress;
    item.tokenId = event.params.counterOffer.items[i].tokenId;
    item.offer = offer.id;
    item.save();
  }
}

export function handleCounterOfferAccepted(event: CounterOfferAccepted): void {
  const tradeId = event.params.tradeId.toString();
  const offerId = tradeId + event.params.counterOfferIndex.toString();
  const offer = CounterOffer.load(offerId);
  if (!offer) return;

  const trade = new Trade(tradeId);
  trade.finishedAt = event.block.timestamp.toI32();
  trade.acceptedCounterOffer = offer.id;
  trade.counterAgentAddress = offer.offererAddress;
  trade.save();
}
