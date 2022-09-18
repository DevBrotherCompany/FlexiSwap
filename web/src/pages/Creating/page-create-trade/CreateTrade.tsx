import React from "react";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

import { TradeLayout } from "./TradeLayout/TradeLayout";

const CreateTrade: React.FC = () => {
  return (
    <TradeLayout>
      <FlexiTitle>Select NFTs to trade</FlexiTitle>
    </TradeLayout>
  );
};

export default CreateTrade;
