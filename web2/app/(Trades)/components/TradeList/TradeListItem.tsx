import React, { useState } from "react";
import { useTradeListStyles } from "./TradeList.style";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";

import { INftCollection, INftItem, ITrade } from "@/interfaces";
import { FlexiButton } from "@/components/FlexiButton/FlexiButton";

import { TradeHeader } from "../TradeHeader/TradeHeader";
import { NftList } from "../NftList/NftList";
import { NftCollectionBlock } from "../NftCollectionBlock/NftCollectionBlock";

import { ArrowSvg } from "./arrowSvg";
import { useCreatedDate, useHiddenDetailsTrades } from "./utils";

interface TradeListItemProps {
  item: ITrade;
  onClick?: (item: INftItem) => void;
  onClickCollection?: (item: INftCollection) => void;
}

export const TradeListItem: React.FC<TradeListItemProps> = ({
  item,
  onClick,
  onClickCollection,
}) => {
  const classes = useTradeListStyles();
  const { givings, createdAt, initiatorAddress, receivings } = item;

  const [expanded, setExpanded] = useState(false);

  const {
    isPreviewCollection,
    previewReceivingCollection,
    previewReceivingItems,
    receivingCount,
    isManyReceivings,
  } = useHiddenDetailsTrades(receivings);

  const creationDate = useCreatedDate(createdAt);

  const toggleExpand = () => {
    setExpanded((prevState) => !prevState);
  };

  const transformItems = (item: { item: INftItem }) => ({ ...item.item });

  return (
    <Accordion className={classes.accordion} expanded={expanded}>
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
                  list={givings.items.map(transformItems) ?? []}
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
                {!isPreviewCollection ? (
                  <NftList list={previewReceivingItems} onClick={onClick} />
                ) : (
                  <NftCollectionBlock
                    collection={previewReceivingCollection}
                    onClick={onClickCollection}
                  />
                )}
                {isManyReceivings && (
                  <p>
                    {receivingCount} more offer
                    {receivingCount > 2 ? "s" : ""}
                    ...
                  </p>
                )}
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
                  list={givings.items.map(transformItems) ?? []}
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
                {!isPreviewCollection ? (
                  <NftList list={previewReceivingItems} onClick={onClick} />
                ) : (
                  <NftCollectionBlock
                    collection={previewReceivingCollection}
                    onClick={onClickCollection}
                  />
                )}
                {isManyReceivings && (
                  <p>
                    {receivingCount} more offer
                    {receivingCount > 2 ? "s" : ""}
                    ...
                  </p>
                )}
              </Grid>
            </Grid>
            <Grid container>
              <Grid item xs={2}>
                <FlexiButton
                  onClick={toggleExpand}
                  variant={!expanded ? "contained" : "outlined"}
                >
                  {!expanded ? "Details" : "Hide details"}
                </FlexiButton>
              </Grid>
            </Grid>
          </>
        )}
      </AccordionDetails>
    </Accordion>
  );
};
