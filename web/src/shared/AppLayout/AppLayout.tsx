import React, { Suspense } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

import { RouteName } from 'shared/routes'

const AllTrades = React.lazy(() => import('pages/Trades/page-all-trades/AllTrades'))
const MyTrades = React.lazy(() => import('pages/Trades/page-my-trades/MyTrades'))
const MyCounteroffers = React.lazy(() => import('pages/Trades/page-my-counteroffers/MyCounteroffers'))

const CreateTrade = React.lazy(() => import('pages/Creating/page-create-trade/CreateTrade'))
const CreateOffers = React.lazy(() => import('pages/Creating/page-create-offers/CreateOffers'))

export const AppLayout: React.FC = () => {
  return (
    <Suspense fallback={<h1>Loading...</h1>}>
      <Router>
        <Routes>
          <Route path={RouteName.AllTrades} element={<AllTrades />} />
          <Route path={RouteName.MyTrades} element={<MyTrades />} />
          <Route path={RouteName.MyCounterOffers} element={<MyCounteroffers />} />
          <Route path={RouteName.CreateTrade} element={<CreateTrade />} />
          <Route path={RouteName.CreateOffers} element={<CreateOffers />} />
        </Routes>
      </Router>
    </Suspense>
  )
}
