import React from "react";
import { useTradeLayoutStyles } from "./TradeLayout.style";

import { useNavigate } from "react-router-dom";

import { RouteName } from "shared/routes";
import { FlexiButton } from "components/FlexiButton/FlexiButton";
import { TradeOfferSidebar } from "pages/Creating/components/TradeOfferSidebar/TradeOfferSidebar";

interface TradeLayoutProps {}

export const TradeLayout: React.FC<TradeLayoutProps> = ({ children }) => {
  const classes = useTradeLayoutStyles();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(RouteName.AllTrades);
  };

  return (
    <main className={classes.container}>
      <TradeOfferSidebar>
        <FlexiButton
          variant={"outlined"}
          className={classes.btn}
          onClick={handleBack}
        >
          Back
        </FlexiButton>
      </TradeOfferSidebar>
      {children}
    </main>
  );
};
