import React from "react";
import { useConnectWalletStyles } from "./ConnectWallet.style";

import { Grid } from "@mui/material";

import { useAuth } from "hooks";
import { Message } from "shared/variables";
import { MetamaskButton } from "components/MetamaskButton/MetamaskButton";

export const ConnectWallet: React.FC = () => {
  const classes = useConnectWalletStyles();
  const { login } = useAuth();

  return (
    <Grid container className={classes.connectWrapper}>
      <Grid item xs={1.7}>
        <MetamaskButton
          onClick={() => login({ signingMessage: Message.HelloFromFlexiSwap })}
          className={classes.connect}
        >
          Connect wallet
        </MetamaskButton>
      </Grid>
    </Grid>
  );
};
