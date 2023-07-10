"use client";
import React, { useState } from "react";
import { useTradeListStyles } from "./TradeList.style";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";

import { FlexiButton } from "@/components/FlexiButton/FlexiButton";
import {
  IGivingsItem,
  INftCollection,
  INftItem,
  ITrade
} from "@/interfaces";

import { NftList } from "../NftList/NftList";
import { TradeHeader } from "../TradeHeader/TradeHeader";

import { useAuth } from "@/hooks";
import { RouteName } from "@/shared/routes";
import Link from "next/link";
import CounterOffersExpandedListItems from "./CounterOffersExpandedListItems";
import ReceivingsExpandedListItems from "./ReceivingsExpandedListItems";
import { ArrowSvg } from "./arrowSvg";
import { useCreatedDate, useHiddenDetailsTrades } from "./utils";

export interface TradeListItemProps {
  item: ITrade;
  onClick?: (item: INftItem) => void;
  onClickCollection?: (item: INftCollection) => void;
  variant?: "onlyRecievings" | "onlyCounterOffers";
}

export const TradeListItem: React.FC<TradeListItemProps> = ({
  item,
  onClick,
  onClickCollection,
  variant = "onlyRecievings",
}) => {
  const classes = useTradeListStyles();
  const { givings, createdAt, initiatorAddress, receivings, counterOffers } =
    item;

  const [expanded, setExpanded] = useState(false);

  const {
    previewReceivingItems,
    receivingCount,
    isManyReceivings,
    isManyCounterOffers,
    previewCounterOffersItems,
    counterOffersCount,
  } = useHiddenDetailsTrades({ receivings, counterOffers });
  const creationDate = useCreatedDate(createdAt);
  const { account } = useAuth();

  const toggleExpand = () => {
    setExpanded((prevState) => !prevState);
  };
  const transformItems = (item: IGivingsItem) => ({ ...item.item });

  const isManyOffersLabel = (count: number) => (
    <p>
      {count - 1} more offer
      {count - 1 >= 2 ? "s" : ""}
      ...
    </p>
  );

  return (
    <Accordion
      TransitionProps={{ timeout: 0 }}
      className={classes.accordion}
      expanded={expanded}
    >
      <AccordionSummary className={classes.accordionSumary}>
        <TradeHeader
          userName={""}
          address={initiatorAddress}
          tradeDate={`${creationDate} days ago`}
        />
        {!expanded && (
          <>
            <Grid className={classes.listItem}>
              <Grid item className={classes.givings}>
                <NftList
                  list={givings.items.map(transformItems).filter(Boolean) ?? []}
                  onClick={onClick}
                  isExpanded={expanded}
                />
              </Grid>

              <Grid
                container
                justifyContent={"center"}
                alignItems={"center"}
                paddingBottom={"5%"}
              >
                {ArrowSvg}
              </Grid>
              <Grid item>
                <NftList
                  list={
                    variant === "onlyCounterOffers"
                      ? previewCounterOffersItems
                      : previewReceivingItems
                  }
                  onClick={onClick}
                />
                {variant === "onlyRecievings" &&
                  isManyReceivings &&
                  isManyOffersLabel(receivingCount)}
                {variant === "onlyCounterOffers" &&
                  isManyCounterOffers &&
                  isManyOffersLabel(counterOffersCount)}
              </Grid>
              <Grid container>
                <Grid item xs={2}>
                  <FlexiButton onClick={toggleExpand} variant={"contained"}>
                    Details
                  </FlexiButton>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </AccordionSummary>
      <AccordionDetails>
        {expanded && (
          <>
            <Grid className={classes.listItem}>
              <Grid item className={classes.givings}>
                <NftList
                  list={givings.items.map(transformItems).filter(Boolean) ?? []}
                  onClick={onClick}
                  isExpanded={expanded}
                />
              </Grid>

              <Grid
                container
                justifyContent={"center"}
                paddingTop={"50px"}
                paddingBottom={"5%"}
              >
                {ArrowSvg}
              </Grid>

              <Grid item>
                {variant === "onlyCounterOffers"
                  ? item.counterOffers.map(({ items, id }, idx) => (
                      <CounterOffersExpandedListItems
                        initiatorAddress={initiatorAddress}
                        items={items.map(({ item }) => item).filter(Boolean)}
                        subtitle={`Counter offer #${idx + 1}`}
                        onNftClick={onClick}
                        tradeId={item.id}
                        id={id}
                        key={`${id}`}
                      />
                    ))
                  : item.receivings.map(({ items, id }, idx) => (
                      <ReceivingsExpandedListItems
                        initiatorAddress={initiatorAddress}
                        items={
                          items
                            .map(({ item }) => item)
                            .filter(Boolean) as INftItem[]
                        }
                        subtitle={`Offer #${idx + 1}`}
                        onNftClick={onClick}
                        tradeId={item.id}
                        id={id}
                        key={`${id}`}
                      />
                    ))}
              </Grid>
              <Grid container gap={"10px"}>
                {account &&
                  account?.toLowerCase() !== item.initiatorAddress && (
                    <Grid item>
                      <Link
                        href={`${
                          RouteName.CreateCounterOffer
                        }/${item.id.toString()}`}
                      >
                        <FlexiButton>Create counteroffer</FlexiButton>
                      </Link>
                    </Grid>
                  )}

                <Grid item xs={3}>
                  <FlexiButton onClick={toggleExpand} variant={"outlined"}>
                    Hide details
                  </FlexiButton>
                </Grid>
              </Grid>
            </Grid>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
