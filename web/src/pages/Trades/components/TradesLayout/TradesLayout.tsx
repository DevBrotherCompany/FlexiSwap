import React, { PropsWithChildren } from "react";
import { useTradesSidebarStyles } from "./TradesLayout.style";

import { AppBar, Toolbar } from "@mui/material";

import { FlexiButton } from "components/FlexiButton/FlexiButton";
import { Sidebar } from "components/Sidebar/Sidebar";
import { FlexiInput } from "components/FlexiInput/FlexiInput";

import { useAuth } from "hooks";

import { Subtitle } from "../Text/Subtitle";
import { SidebarList } from "../SidebarList/SidebarList";
import { ConnectWallet } from "../ConnectWallet/ConnectWallet";

interface TradesLayoutProps extends PropsWithChildren {
  onSearchChange?: (value: string) => void;
}

export const TradesLayout: React.FC<TradesLayoutProps> = ({
  onSearchChange,
  children,
}) => {
  const classes = useTradesSidebarStyles();
  const { isAuthenticated } = useAuth();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    onSearchChange && onSearchChange(e.target.value);
  };

  return (
    <main className={classes.wrapper}>
      <AppBar classes={{ root: classes.appbar }}>
        <Toolbar>
          <FlexiInput
            onChange={handleChange}
            className={classes.input}
            placeholder={"Search by NFTs, username..."}
          />
        </Toolbar>
      </AppBar>
      <Sidebar>
        <FlexiButton variant={"contained"}>Create trade</FlexiButton>
        <Subtitle className={classes.subtitle}>Marketplace</Subtitle>
        <SidebarList />
        {!isAuthenticated && <ConnectWallet />}
      </Sidebar>
      {children}
    </main>
  );
};
