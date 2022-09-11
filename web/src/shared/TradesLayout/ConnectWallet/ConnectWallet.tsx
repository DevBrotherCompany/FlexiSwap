import React from "react";
import { useConnectWalletStyles } from "./ConnectWallet.style";

import { useAuth } from "hooks";
import { MetamaskButton } from "components/MetamaskButton/MetamaskButton";

export const ConnectWallet: React.FC = () => {
  const classes = useConnectWalletStyles();
  const { login } = useAuth();

  return (
    <div className={classes.connectWrapper}>
      <MetamaskButton
        onClick={() => login({ signingMessage: "Hello from FlexiSwap!" })}
        className={classes.connect}
      >
        Connect wallet
      </MetamaskButton>
    </div>
  );
};
