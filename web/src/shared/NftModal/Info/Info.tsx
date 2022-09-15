import React from "react";
import { useNftModalStyles } from "../NftModal.style";

import { Grid } from "@mui/material";

import { INft } from "interfaces";

import { Header } from "../Text/Header";
import { Body } from "../Text/Body";

interface InfoProps {
  item: INft;
}

export const Info: React.FC<InfoProps> = ({ item }) => {
  const classes = useNftModalStyles();
  return (
    <Grid container direction={"column"}>
      <Grid item>
        <Header>Collection name</Header>
        <Body>{item.collection}</Body>
      </Grid>

      <Grid item className={classes.item}>
        <Header>Collection address</Header>
        <Body>{item.address}</Body>
      </Grid>

      <Grid item className={classes.item}>
        <Header>Token id</Header>
        <Body>{item.id}</Body>
      </Grid>
    </Grid>
  );
};
