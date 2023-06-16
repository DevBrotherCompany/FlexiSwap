'use client'
import React from "react";
import { useConnectWalletStyles } from "./ConnectWallet.style";

import { Grid } from "@mui/material";
import { MetamaskButton } from "@/components/MetamaskButton/MetamaskButton";

export const ConnectWallet: React.FC = () => {
  const classes = useConnectWalletStyles();

  return (
    <Grid container className={classes.connectWrapper}>
      <Grid item xs={1.5}>
        <MetamaskButton
          className={classes.connect}
        >
          Connect wallet
        </MetamaskButton>
      </Grid>
    </Grid>
  );
};
