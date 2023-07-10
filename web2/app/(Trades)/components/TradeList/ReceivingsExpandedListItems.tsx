"use client";
import React, { useCallback, useEffect, useState } from "react";
import { INftItem } from "@/interfaces";
import { FlexiSubtitle } from "@/components/FlexiSubtitle/FlexiSubtitle";
import { FlexiButton } from "@/components/FlexiButton/FlexiButton";
import { Grid } from "@mui/material";
import { useAuth, useCheckIfOwner } from "@/hooks";
import useFlexiSwap from "@/hooks/useFlexiSwap";
import { useTradeListStyles } from "./TradeList.style";
import { NftList } from "../NftList/NftList";

type ReceivingsExpandedListItemsProps = {
  subtitle: string;
  items: INftItem[];
  onNftClick?: (item: INftItem) => void;
  initiatorAddress: string;
  tradeId: bigint;
  id: bigint;
};

const ReceivingsExpandedListItems: React.FC<
  ReceivingsExpandedListItemsProps
> = ({ initiatorAddress, subtitle, items, onNftClick, tradeId, id }) => {
  const [isOwner, setIsOwner] = useState(false);
  const classes = useTradeListStyles();
  const { account } = useAuth();
  const flexiSwap = useFlexiSwap();
  const checkIfOwner = useCheckIfOwner();

  const checkIfCanAccept = useCallback(async () => {
    const isOwner = await checkIfOwner(items);
    setIsOwner(isOwner);
  }, [checkIfOwner, items]);

  const acceptOffer = useCallback(async () => {
    if (!flexiSwap) return;

    try {
      await flexiSwap.acceptOffer(tradeId, id, items, []);
    } catch (e) {
      console.log("ERROR: ", e);
    }
  }, [flexiSwap]);

  useEffect(() => {
    if (account && account?.toLocaleLowerCase() !== initiatorAddress) {
      checkIfCanAccept();
    }
  }, [checkIfCanAccept, account, initiatorAddress]);

  return (
    <div className={classes.expandedNftList}>
      <FlexiSubtitle>{subtitle}</FlexiSubtitle>
      <NftList list={items} onClick={onNftClick} isExpanded />
      {account &&
        account?.toLocaleLowerCase() !== initiatorAddress &&
        isOwner && (
          <Grid container xs={4}>
            <FlexiButton onClick={acceptOffer}>Accept {subtitle}</FlexiButton>
          </Grid>
        )}
    </div>
  );
};

export default ReceivingsExpandedListItems;
