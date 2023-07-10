"use client";
import React from "react";
import { useConnectWalletStyles } from "./ConnectWallet.style";

import { RainbowKitButton } from "@/components/RainbowKitButton/RainbowKitButton";

export const ConnectWallet: React.FC = () => {
  const classes = useConnectWalletStyles();

  return (
    <div className={classes.connectWrapper}>
      <div>
        <RainbowKitButton className={classes.connect}>
          Connect wallet
        </RainbowKitButton>
      </div>
    </div>
  );
};
