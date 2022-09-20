import React from "react";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

import { YourSelection } from "pages/Creating/components/YourSelection/YourSelection";

import { TradeLayout } from "./TradeLayout/TradeLayout";

import { selectedNft } from "MOCK/selected";

const CreateTrade: React.FC = () => {
  return (
    <TradeLayout>
      <FlexiTitle>Select NFTs to trade</FlexiTitle>
      <YourSelection selected={selectedNft} />
    </TradeLayout>
  );
};

export default CreateTrade;
