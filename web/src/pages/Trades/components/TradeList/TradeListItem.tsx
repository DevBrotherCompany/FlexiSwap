import React, { useState } from "react";
import { useTradeListStyles } from "./TradeList.style";

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Grid,
} from "@mui/material";

import { INft, ITrade } from "interfaces";
import { FlexiButton } from "components/FlexiButton/FlexiButton";

import { TradeHeader } from "../TradeHeader/TradeHeader";
import { NftList } from "../NftList/NftList";
import { NftCollectionBlock } from "../NftCollectionBlock/NftCollectionBlock";

import { ArrowSvg } from "./arrowSvg";

interface TradeListItemProps {
  item: ITrade;
  onClick?: (item: INft) => void;
  onClickCollection?: (item: INft[]) => void;
}

export const TradeListItem: React.FC<TradeListItemProps> = ({
  item,
  onClick,
  onClickCollection,
}) => {
  const classes = useTradeListStyles();

  const [expanded, setExpanded] = useState(false);

  const { user, date, offer, counterOffer } = item;
  const counterOffersCount = counterOffer.length - 1;

  const mocked_isCollection = Math.random() > 0.5;

  const toggleExpand = () => {
    setExpanded((prevState) => !prevState);
  };

  return (
    <Accordion className={classes.accordion} expanded={expanded}>
      <AccordionSummary className={classes.accordion}>
        {/*TODO: make right calc of date of the start of trade*/}
        <TradeHeader
          userName={`${user.name} ${user.lastName}`}
          address={user.address}
          tradeDate={`${date.getDate()} days ago`}
        />
        <Grid className={classes.listItem}>
          <Grid item>
            <NftList list={offer} onClick={onClick} />
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
            {mocked_isCollection ? (
              <NftList list={counterOffer} onClick={onClick} />
            ) : (
              <NftCollectionBlock
                collection={counterOffer}
                onClick={onClickCollection}
              />
            )}
            {/* TODO move to separate component */}
            {counterOffersCount > 0 && (
              <p>
                {counterOffersCount} more offer
                {counterOffersCount > 1 ? "s" : ""}
                ...
              </p>
            )}
          </Grid>
        </Grid>
        <Grid container>
          <Grid item xs={2}>
            <FlexiButton onClick={toggleExpand}>Details</FlexiButton>
          </Grid>
        </Grid>
      </AccordionSummary>
      <AccordionDetails>
        AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA
      </AccordionDetails>
    </Accordion>
  );
};
