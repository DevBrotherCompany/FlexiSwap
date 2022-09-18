import React, { PropsWithChildren } from "react";
import { useOfferLayoutStyles } from "./OffersLayout.style";

import { TradeOfferSidebar } from "pages/Creating/components/TradeOfferSidebar/TradeOfferSidebar";

interface OfferLayoutProps extends PropsWithChildren {}

export const OffersLayout: React.FC<OfferLayoutProps> = ({ children }) => {
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
