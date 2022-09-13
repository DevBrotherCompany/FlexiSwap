import React from "react";

import { Grid } from "@mui/material";

import { ITrade } from "interfaces";
import { FlexiButton } from "components/FlexiButton/FlexiButton";

import { TradeHeader } from "../TradeHeader/TradeHeader";
import { NftList } from "../NftList/NftList";

interface TradeListItemProps {
  item: ITrade;
}

export const TradeListItem: React.FC<TradeListItemProps> = ({ item }) => {
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
          <NftList list={offer} />
        </Grid>
        <Grid item>
          <NftList list={counterOffer} />
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
