import React from "react";

import { CreatingSidebar } from "../CreatingSidebar/CreatingSidebar";
import { TradeOfferStepper } from "../TradeOfferStepper/TradeOfferStepper";

interface TradeOfferSidebarProps {
  children: React.ReactNode;
}

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
