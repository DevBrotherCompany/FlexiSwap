import React from "react";
import { Route, Routes } from "react-router-dom";

const Main = React.lazy(() => import("pages/MainPage/Main"));

export const AppRouter: React.FC = () => {
  return (
    <Routes>
      <Route path={"/main"} element={<Main />} />
    </Routes>
  );
};
