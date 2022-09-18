import React, { PropsWithChildren } from "react";
import { useTradeLayoutStyles } from "./TradeLayout.style";

import { useNavigate } from "react-router-dom";

import { FlexiButton } from "components/FlexiButton/FlexiButton";
import { TradeOfferSidebar } from "pages/Creating/components/TradeOfferSidebar/TradeOfferSidebar";

interface TradeLayoutProps extends PropsWithChildren {}

export const TradeLayout: React.FC<TradeLayoutProps> = ({ children }) => {
  const classes = useTradeLayoutStyles();
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
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
