import React from "react";
import { useHeaderStyles } from "./Header.style";

import { Grid } from "@mui/material";

import { useAuth } from "hooks";
import { MetamaskButton } from "components/MetamaskButton/MetamaskButton";
import { Message } from "shared/variables";

import { ReactComponent as Logo } from "assets/images/flexiSwapLogo.svg";

export const Header: React.FC = () => {
  const classes = useHeaderStyles();
  const { moralisAccount, login } = useAuth();

  const handleClick = () => {
    login({ signingMessage: Message.HelloFromFlexiSwap });
  };

  return (
    <header className={classes.container}>
      <Logo width={112} height={71} />
      {!moralisAccount && (
        <Grid item>
          <MetamaskButton onClick={handleClick} />
        </Grid>
      )}
    </header>
  );
};;
