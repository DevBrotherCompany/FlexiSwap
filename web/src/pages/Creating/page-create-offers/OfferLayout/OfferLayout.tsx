import React, { PropsWithChildren } from "react";
import { useOfferLayoutStyles } from "./OfferLayout.style";

import { TradeOfferSidebar } from "pages/Creating/components/TradeOfferSidebar/TradeOfferSidebar";

interface OfferLayoutProps extends PropsWithChildren {}

export const OfferLayout: React.FC<OfferLayoutProps> = ({ children }) => {
  const classes = useOfferLayoutStyles();
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
