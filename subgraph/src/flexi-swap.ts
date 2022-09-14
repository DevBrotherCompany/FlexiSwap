import {
  CounterOfferAccepted,
  CounterOfferCreated,
  FlexiSwap,
  TradeAccepted,
  TradeCreated,
} from "../generated/FlexiSwap/FlexiSwap"
import {
  CounterOffer,
  CounterOfferItem,
  GivingsOffer,
  GivingsOfferItem,
  ReceivingsOffer,
  ReceivingsOfferItem,
  Trade,
} from "../generated/schema"

export function handleTradeCreated(event: TradeCreated): void {
  const flexiSwap = FlexiSwap.bind(event.address);

  const trade = new Trade(event.params.tradeId.toString());
  trade.createdAt = event.block.timestamp.toI32();
  trade.initiatorAddress = event.params.trade.initiator;
  trade.save();

  const givings = new GivingsOffer(event.params.trade.givingsId.toString());
  givings.trade = trade.id;
  givings.save();

  const givingsItems = flexiSwap.items(event.params.trade.givingsId);
  for (let i = 0; i < givingsItems.length; i++) {
    const item = new GivingsOfferItem(givings.id + i.toString());
    item.tokenAddress = givingsItems[i].nftAddress;
    item.tokenId = givingsItems[i].tokenId;
    item.offer = givings.id;
    item.save();
  }

  for (let i = 0; i < event.params.trade.receivingsIds.length; i++) {
    const receivings = new ReceivingsOffer(event.params.trade.receivingsIds[i].toString());
    receivings.trade = trade.id;
    receivings.save();

    const receivingsItems = flexiSwap.items(event.params.trade.receivingsIds[i]);
    for (let j = 0; j < receivingsItems.length; j++) {
      const item = new ReceivingsOfferItem(receivings.id + j.toString());
      item.tokenAddress = receivingsItems[i].nftAddress;
      item.tokenId = receivingsItems[i].isEmptyToken
        ? null
        : receivingsItems[i].tokenId;
      item.offer = receivings.id;
      item.save();
    }
  }
}

export function handleTradeAccepted(event: TradeAccepted): void {
  const trade = new Trade(event.params.tradeId.toString());
  trade.finishedAt = event.block.timestamp.toI32();
  trade.acceptedReceivingsOffer = event.params.itemsId.toString();
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
