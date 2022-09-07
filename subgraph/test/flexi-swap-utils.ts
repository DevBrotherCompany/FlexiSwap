import { newMockEvent } from "matchstick-as"
import { ethereum, BigInt, Address } from "@graphprotocol/graph-ts"
import {
  CounterOfferAccepted,
  CounterOfferCreated,
  TradeAccepted,
  TradeCreated
} from "../generated/FlexiSwap/FlexiSwap"

export function createCounterOfferAcceptedEvent(
  tradeId: BigInt,
  counterOfferIndex: BigInt
): CounterOfferAccepted {
  let counterOfferAcceptedEvent = changetype<CounterOfferAccepted>(
    newMockEvent()
  )

  counterOfferAcceptedEvent.parameters = new Array()

  counterOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "tradeId",
      ethereum.Value.fromUnsignedBigInt(tradeId)
    )
  )
  counterOfferAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "counterOfferIndex",
      ethereum.Value.fromUnsignedBigInt(counterOfferIndex)
    )
  )

  return counterOfferAcceptedEvent
}

export function createCounterOfferCreatedEvent(
  counterOfferer: Address,
  tradeId: BigInt,
  counterOffer: ethereum.Tuple
): CounterOfferCreated {
  let counterOfferCreatedEvent = changetype<CounterOfferCreated>(newMockEvent())

  counterOfferCreatedEvent.parameters = new Array()

  counterOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "counterOfferer",
      ethereum.Value.fromAddress(counterOfferer)
    )
  )
  counterOfferCreatedEvent.parameters.push(
    new ethereum.EventParam("tradeId", ethereum.Value.fromSignedBigInt(tradeId))
  )
  counterOfferCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "counterOffer",
      ethereum.Value.fromTuple(counterOffer)
    )
  )

  return counterOfferCreatedEvent
}

export function createTradeAcceptedEvent(
  accpter: Address,
  tradeId: BigInt,
  offerIndex: BigInt
): TradeAccepted {
  let tradeAcceptedEvent = changetype<TradeAccepted>(newMockEvent())

  tradeAcceptedEvent.parameters = new Array()

  tradeAcceptedEvent.parameters.push(
    new ethereum.EventParam("accpter", ethereum.Value.fromAddress(accpter))
  )
  tradeAcceptedEvent.parameters.push(
    new ethereum.EventParam("tradeId", ethereum.Value.fromSignedBigInt(tradeId))
  )
  tradeAcceptedEvent.parameters.push(
    new ethereum.EventParam(
      "offerIndex",
      ethereum.Value.fromUnsignedBigInt(offerIndex)
    )
  )

  return tradeAcceptedEvent
}

export function createTradeCreatedEvent(
  tradeId: BigInt,
  trade: ethereum.Tuple
): TradeCreated {
  let tradeCreatedEvent = changetype<TradeCreated>(newMockEvent())

  tradeCreatedEvent.parameters = new Array()

  tradeCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "tradeId",
      ethereum.Value.fromUnsignedBigInt(tradeId)
    )
  )
  tradeCreatedEvent.parameters.push(
    new ethereum.EventParam("trade", ethereum.Value.fromTuple(trade))
  )

  return tradeCreatedEvent
}
