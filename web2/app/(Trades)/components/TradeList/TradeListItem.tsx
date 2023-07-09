"use client";
import React, { useCallback, useState } from "react";
import { useTradeListStyles } from "./TradeList.style";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";

import { FlexiButton } from "@/components/FlexiButton/FlexiButton";
import {
  ICounterOffer,
  IGivingsItem,
  INftCollection,
  INftItem,
  IReceivingsOffer,
  ITrade,
} from "@/interfaces";

import { NftList } from "../NftList/NftList";
import { TradeHeader } from "../TradeHeader/TradeHeader";

import { FlexiSubtitle } from "@/components/FlexiSubtitle/FlexiSubtitle";
import { RouteName } from "@/shared/routes";
import Link from "next/link";
import { ArrowSvg } from "./arrowSvg";
import { useCreatedDate, useHiddenDetailsTrades } from "./utils";
import { useAuth } from "@/hooks";

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

  const offersToExpand =
    variant === "onlyCounterOffers" ? item.counterOffers : item.receivings;

  const toggleExpand = () => {
    setExpanded((prevState) => !prevState);
  };
  const transformItems = (item: IGivingsItem) => ({ ...item.item });

  const isManyOffersLabel = (count: number) => (
    <p>
      {count} more offer
      {count > 2 ? "s" : ""}
      ...
    </p>
  );

  const acceptReceivingOffer = useCallback(
    async (offer: IReceivingsOffer) => {},
    []
  );

  const acceptCounterOffer = useCallback(async (offer: ICounterOffer) => {},
  []);

  const onAcceptOffer =
    variant === "onlyCounterOffers" ? acceptCounterOffer : acceptReceivingOffer;

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
                {offersToExpand.map((offer, idx) => (
                  <div className={classes.expandedNftList}>
                    <FlexiSubtitle>Offer #{idx + 1}</FlexiSubtitle>
                    <NftList
                      list={
                        offer.items
                          .map(({ item }) => item)
                          .filter(Boolean) as INftItem[]
                      }
                      onClick={onClick}
                      isExpanded={expanded}
                    />
                    {account?.toLocaleLowerCase() !== initiatorAddress && (
                      <Grid container xs={4}>
                        <FlexiButton>Accept Offer #{idx + 1}</FlexiButton>
                      </Grid>
                    )}
                  </div>
                ))}
              </Grid>
              <Grid container gap={"10px"}>
                {account?.toLowerCase() !== item.initiatorAddress && (
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
