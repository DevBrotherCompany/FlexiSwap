import React from "react";
import { useNftModalStyles } from "../NftModal.style";

import { Grid } from "@mui/material";

import { INftItem } from "interfaces";

import { Header } from "../Text/Header";
import { Body } from "../Text/Body";

interface InfoProps {
  item: INftItem;
}

export const Info: React.FC<InfoProps> = ({ item }) => {
  const classes = useNftModalStyles();
  const { tokenId, name, tokenAddress } = item;

  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Header>Nft name</Header>
        <Body>{name}</Body>
      </Grid>

      <Grid item className={classes.item}>
        <Header>Nft address</Header>
        <Body>{tokenAddress}</Body>
      </Grid>

      <Grid item className={classes.item}>
        <Header>Token id</Header>
        <Body>{tokenId}</Body>
      </Grid>
    </Grid>
  );
};
