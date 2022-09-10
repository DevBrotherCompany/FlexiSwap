import React, { PropsWithChildren } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { UnLoggedInView } from "pages/UnLoggedInView/UnLoggedInView";
import { useAuth } from "hooks";
import { AppRouter } from "shared/AppRouter/AppRouter";
import FlexiButton from "components/FlexiButton/FlexiButton";
import { MetamaskButton } from "components/MetamaskButton/MetamaskButton";

export const AppLayout: React.FC<PropsWithChildren> = () => {
  const { isAuthenticated } = useAuth();

  return (
    <>
      <FlexiButton>Press me</FlexiButton>
      <MetamaskButton>Press me</MetamaskButton>
      <Router>
        {!isAuthenticated ? (
          <div
            style={{
              width: "100vw",
              height: "100vh",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <UnLoggedInView />
          </div>
        ) : (
          <AppRouter />
        )}
      </Router>
    </>
  );
};
