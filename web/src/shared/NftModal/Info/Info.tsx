import React from "react";
import { useNftModalStyles } from "../NftModal.style";

import { Grid } from "@mui/material";

import { INftItem } from "interfaces";

import { Header } from "../Text/Header";
import { Body } from "../Text/Body";

interface InfoProps {
  item: INftItem;
}

export const Info: React.FC<InfoProps> = ({
  item: { collection, tokenId },
}) => {
  const classes = useNftModalStyles();
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Header>Collection name</Header>
        <Body>{collection?.name}</Body>
      </Grid>

      <Grid item className={classes.item}>
        <Header>Collection address</Header>
        <Body>{collection?.tokenAddress}</Body>
      </Grid>

      <Grid item className={classes.item}>
        <Header>Token id</Header>
        <Body>{tokenId}</Body>
      </Grid>
    </Grid>
  );
};
