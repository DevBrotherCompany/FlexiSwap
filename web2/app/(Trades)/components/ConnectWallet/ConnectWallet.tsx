'use client'
import React from "react";
import { useConnectWalletStyles } from "./ConnectWallet.style";

import { Grid } from "@mui/material";
import { RainbowKitButton } from "@/components/RainbowKitButton/RainbowKitButton";

export const ConnectWallet: React.FC = () => {
  const classes = useConnectWalletStyles();

  return (
    <Grid container className={classes.connectWrapper}>
      <Grid item xs={1.5}>
        <RainbowKitButton
          className={classes.connect}
        >
          Connect wallet
        </RainbowKitButton>
      </Grid>
    </Grid>
  );
};
