import React from "react";
import { TradesLayout } from "shared/TradesSidebar/TradesLayout";
import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

const MyTrades: React.FC = () => {
  return (
    <TradesLayout>
      <FlexiTitle>My trades</FlexiTitle>
    </TradesLayout>
  );
};

export default MyTrades;
