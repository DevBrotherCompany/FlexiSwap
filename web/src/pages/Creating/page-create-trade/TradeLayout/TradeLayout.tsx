import React, { PropsWithChildren } from "react";
import { useTradeLayoutStyles } from "./TradeLayout.style";

import { TradeOfferSidebar } from "pages/Creating/components/TradeOfferSidebar/TradeOfferSidebar";

interface TradeLayoutProps extends PropsWithChildren {}

export const TradeLayout: React.FC<TradeLayoutProps> = ({ children }) => {
  const classes = useTradeLayoutStyles();
  return (
    <main className={classes.container}>
      <TradeOfferSidebar>
        {/*{}*/}
        {/*{}*/}
        {/*{}*/}
      </TradeOfferSidebar>
      {children}
    </main>
  );
};
