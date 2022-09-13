import React from "react";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

import { TradesLayout } from "../components/TradesLayout/TradesLayout";
import { TradeList } from "../components/TradeList/TradeList";

import { trades } from "MOCK";

const AllTrades: React.FC = () => {
  return (
    <TradesLayout>
      <FlexiTitle>All trades</FlexiTitle>
      <TradeList list={trades} />
    </TradesLayout>
  );
};

export default AllTrades;
