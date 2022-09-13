import React, { PropsWithChildren, Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RouteName } from "shared/routes";

const AllTrades = React.lazy(
  () => import("pages/Trades/page-all-trades/AllTrades")
);
const MyTrades = React.lazy(
  () => import("pages/Trades/page-my-trades/MyTrades")
);
const MyCounteroffers = React.lazy(
  () => import("pages/Trades/page-my-counteroffers/MyCounteroffers")
);

export const AppLayout: React.FC<PropsWithChildren> = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Routes>
          <Route path={RouteName.AllTrades} element={<AllTrades />} />
          <Route path={RouteName.MyTrades} element={<MyTrades />} />
          <Route
            path={RouteName.MyCounterOffers}
            element={<MyCounteroffers />}
          />
        </Routes>
      </Router>
    </Suspense>
  );
};
