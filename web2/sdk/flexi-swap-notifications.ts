import { IFlexiSwap } from "./IFlexiSwap";
import { Item, NullableItem } from "./types";
import { toast } from "react-toastify";

export class FlexiSwapWithNotifications implements IFlexiSwap {
  constructor(private readonly flexiSwap: IFlexiSwap) {}

  createTrade(givings: Item[], receivings: NullableItem[][]): Promise<void> {
    return toast.promise(this.flexiSwap.createTrade(givings, receivings), {
      pending: "Creating trade",
      error: "Error while creating trade",
      success: "Trade successfully created",
    });
  }
  acceptOffer(
    tradeId: bigint,
    receivingId: bigint,
    receivings: Item[],
    additionalItems: Item[]
  ): Promise<void> {
    return toast.promise(
      this.flexiSwap.acceptOffer(
        tradeId,
        receivingId,
        receivings,
        additionalItems
      ),
      {
        pending: "Accepting offer",
        error: "Error while accepting offer",
        success: "Offer succesfully accepted",
      }
    );
  }
  createCounterOffer(tradeId: bigint, items: Item[]): Promise<void> {
    return toast.promise(this.flexiSwap.createCounterOffer(tradeId, items), {
      pending: "Creating counteroffer",
      error: "Error while creating counteroffer",
      success: "Counteroffer successfully created",
    });
  }
  acceptCounterOffer(tradeId: bigint, counterOfferId: bigint): Promise<void> {
    return toast.promise(
      this.flexiSwap.acceptCounterOffer(tradeId, counterOfferId),
      {
        pending: "Accepting counteroffer",
        error: "Error while accepting counteroffer",
        success: "Counteroffer successfully accepted",
      }
    );
  }
}
