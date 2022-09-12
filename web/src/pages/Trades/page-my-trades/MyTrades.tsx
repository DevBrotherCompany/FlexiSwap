import React from "react";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

import { TradesLayout } from "../components/TradesLayout/TradesLayout";

const MyTrades: React.FC = () => {
  return (
    <TradesLayout>
      <FlexiTitle>My trades</FlexiTitle>
    </TradesLayout>
  );
};

export default MyTrades;
