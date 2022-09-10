import React, { memo } from "react";

import { TradesSidebar } from "shared/TradesSidebar/TradesSidebar";

const AllTrades: React.FC = () => {
  return (
    <>
      <TradesSidebar />
    </>
  );
};

export default memo(AllTrades);
