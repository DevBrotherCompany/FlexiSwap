import React, { PropsWithChildren } from "react";
import { useTradesSidebarStyles } from "./TradesLayout.style";

import { FlexiButton } from "components/FlexiButton/FlexiButton";
import { Sidebar } from "components/Sidebar/Sidebar";
import { MetamaskButton } from "components/MetamaskButton/MetamaskButton";

import { useAuth } from "hooks";

import { Subtitle } from "./text/Subtitle";
import { SidebarList } from "./sidebar-list/SidebarList";
import { AppBar, Toolbar } from "@mui/material";

interface TradesLayoutProps extends PropsWithChildren {
  onSearchChange?: (value: string) => void;
}

export const TradesLayout: React.FC<TradesLayoutProps> = ({
  onSearchChange,
  children,
}) => {
  const classes = useTradesSidebarStyles();
  const { isAuthenticated, login } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange && onSearchChange(e.target.value);
  };

  return (
    <main className={classes.wrapper}>
      <AppBar classes={{ root: classes.appbar }}>
        <Toolbar>
          <input onChange={handleChange} />
        </Toolbar>
      </AppBar>
      <Sidebar>
        <FlexiButton variant={"contained"}>Create trade</FlexiButton>
        <Subtitle className={classes.subtitle}>Marketplace</Subtitle>
        <SidebarList />
        {!isAuthenticated && (
          <div className={classes.connectWrapper}>
            <MetamaskButton
              onClick={() => login({ signingMessage: "Hello from FlexiSwap!" })}
              className={classes.connect}
            >
              Connect wallet
            </MetamaskButton>
          </div>
        )}
      </Sidebar>
      {children}
    </main>
  );
};
