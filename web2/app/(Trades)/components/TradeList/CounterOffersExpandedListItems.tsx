"use client";
import React, { useCallback } from "react";
import { useTradeListStyles } from "./TradeList.style";
import { INftItem } from "@/interfaces";
import { FlexiSubtitle } from "@/components/FlexiSubtitle/FlexiSubtitle";
import { NftList } from "../NftList/NftList";
import { FlexiButton } from "@/components/FlexiButton/FlexiButton";
import { Grid } from "@mui/material";
import { useAuth } from "@/hooks";
import useFlexiSwap from "@/hooks/useFlexiSwap";

type CounterOffersListProps = {
  subtitle: string;
  items: INftItem[];
  onNftClick?: (item: INftItem) => void;
  initiatorAddress: string;
  tradeId: bigint;
  id: bigint;
};

const CounterOffersExpandedListItems: React.FC<CounterOffersListProps> = ({
  items,
  subtitle,
  onNftClick,
  initiatorAddress,
  tradeId,
  id,
}) => {
  const classes = useTradeListStyles();
  const { account } = useAuth();
  const flexiSwap = useFlexiSwap();

  const acceptCounterOffer = useCallback(async () => {
    if (!flexiSwap) return;

    try {
      await flexiSwap.acceptCounterOffer(tradeId, id);
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }, [flexiSwap]);

  return (
    <div className={classes.expandedNftList}>
      <FlexiSubtitle>{subtitle}</FlexiSubtitle>
      <NftList list={items} onClick={onNftClick} isExpanded />
      {account && account?.toLocaleLowerCase() === initiatorAddress && (
        <Grid container xs={4}>
          <FlexiButton onClick={acceptCounterOffer}>
            Accept {subtitle}
          </FlexiButton>
        </Grid>
      )}
    </div>
  );
};

export default CounterOffersExpandedListItems;
