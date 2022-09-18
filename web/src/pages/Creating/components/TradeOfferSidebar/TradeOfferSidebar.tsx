import React, { PropsWithChildren } from "react";

import { CreatingSidebar } from "../CreatingSidebar/CreatingSidebar";
import { TradeOfferStepper } from "../TradeOfferStepper/TradeOfferStepper";

interface TradeOfferSidebarProps extends PropsWithChildren {}

export const TradeOfferSidebar: React.FC<TradeOfferSidebarProps> = ({
  children,
}) => {
  return (
    <CreatingSidebar>
      <TradeOfferStepper />
      {children}
    </CreatingSidebar>
  );
};
