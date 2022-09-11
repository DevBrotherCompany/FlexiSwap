import React, { memo } from "react";

import { TradesLayout } from "shared/TradesSidebar/TradesLayout";
import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

const AllTrades: React.FC = () => {
  return (
    <TradesLayout>
      <FlexiTitle>All trades</FlexiTitle>
    </TradesLayout>
  );
};

export default memo(AllTrades);
