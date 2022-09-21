import React from "react";

import { Grid } from "@mui/material";

import { INft, ITrade } from "interfaces";
import { FlexiButton } from "components/FlexiButton/FlexiButton";

import { TradeHeader } from "../TradeHeader/TradeHeader";
import { NftList } from "../NftList/NftList";

import { ArrowSvg } from "./arrowSvg";

interface TradeListItemProps {
  item: ITrade;
  onClick?: (item: INft) => void;
}

export const TradeListItem: React.FC<TradeListItemProps> = ({
  item,
  onClick,
}) => {
  const { user, date, offer, counterOffer } = item;
  const counterOffersCount = counterOffer.length - 1;
  return (
    <>
      {/*TODO: make right calc of date of the start of trade*/}
      <TradeHeader
        userName={`${user.name} ${user.lastName}`}
        address={user.address}
        tradeDate={`${date.getDate()} days ago`}
      />
      <Grid container justifyContent={"space-between"}>
        <Grid item>
          <NftList list={offer} onClick={onClick} />
        </Grid>

        <Grid
          container
          justifyContent={"center"}
          alignItems={"center"}
          width={"fit-content"}
          paddingBottom={"5%"}
        >
          {ArrowSvg}
        </Grid>

        <Grid item>
          <NftList list={counterOffer} onClick={onClick} />
          {/* TODO move to separate component */}
          {counterOffersCount > 0 && (
            <p>
              {counterOffersCount} more offer{counterOffersCount > 1 ? "s" : ""}
              ...
            </p>
          )}
        </Grid>
      </Grid>
      <Grid container>
        <Grid item xs={2}>
          <FlexiButton>Details</FlexiButton>
        </Grid>
      </Grid>
    </>
  );
};
