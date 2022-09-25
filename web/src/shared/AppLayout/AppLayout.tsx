import React, { Suspense } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { RouteName } from "shared/routes";

import { Landing } from "pages/Landing/Landing";
import { CreateOffersParant } from "pages/Creating/page-create-offers/CreateOffersParant";
import AllTrades from "pages/Trades/page-all-trades/AllTrades";
import MyTrades from "pages/Trades/page-my-trades/MyTrades";
import MyCounteroffers from "pages/Trades/page-my-counteroffers/MyCounteroffers";
import CreateTrade from "pages/Creating/page-create-trade/CreateTrade";
import CreateOffers from "pages/Creating/page-create-offers/CreateOffers";

export const AppLayout: React.FC = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Routes>
          <Route path={RouteName.Landing} element={<Landing />} />
          <Route path={RouteName.AllTrades} element={<AllTrades />} />
          <Route path={RouteName.MyTrades} element={<MyTrades />} />
          <Route
            path={RouteName.MyCounterOffers}
            element={<MyCounteroffers />}
          />
          <Route path={RouteName.CreateTrade} element={<CreateTrade />} />
          <Route path={RouteName.CreateOffers} element={<CreateOffersParant />}>
            <Route path={":number"} element={<CreateOffers />} />
          </Route>
        </Routes>
      </Router>
    </Suspense>
  );
};
