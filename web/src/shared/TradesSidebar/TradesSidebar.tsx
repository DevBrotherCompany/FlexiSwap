import React from "react";
import { useTradesSidebarStyles } from "./TradesSidebar.style";

import { FlexiButton } from "components/FlexiButton/FlexiButton";
import { Sidebar } from "components/Sidebar/Sidebar";
import { MetamaskButton } from "components/MetamaskButton/MetamaskButton";

import { useAuth } from "hooks";

import { Subtitle } from "./text/Subtitle";
import { SidebarList } from "./sidebar-list/SidebarList";

export const TradesSidebar: React.FC = () => {
  const classes = useTradesSidebarStyles();
  const { isAuthenticated } = useAuth();
  return (
    <Sidebar>
      <FlexiButton variant={"contained"}>Create trade</FlexiButton>
      <Subtitle className={classes.subtitle}>Marketplace</Subtitle>
      <SidebarList />
      {isAuthenticated && (
        <div className={classes.connectWrapper}>
          <MetamaskButton className={classes.connect}>
            Connect wallet
          </MetamaskButton>
        </div>
      )}
    </Sidebar>
  );
};
