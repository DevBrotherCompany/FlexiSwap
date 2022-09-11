import React from "react";

import { TradesLayout } from "shared/TradesLayout/TradesLayout";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

import { TradeList } from "./components/TradeList/TradeList";

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
