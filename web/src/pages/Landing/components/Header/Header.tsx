import React from "react";
import { useHeaderStyles } from "./Header.style";

import { Grid } from "@mui/material";

import { useAuth } from "hooks";
import { MetamaskButton } from "components/MetamaskButton/MetamaskButton";
import { Message } from "shared/variables";

export const Header: React.FC = () => {
  const classes = useHeaderStyles();
  const { account, login } = useAuth();

  const handleClick = () => {
    login({ signingMessage: Message.HelloFromFlexiSwap });
  };

  return (
    <header className={classes.container}>
      FlexiSwap
      {!account && (
        <Grid item>
          <MetamaskButton onClick={handleClick} />
        </Grid>
      )}
    </header>
  );
};
