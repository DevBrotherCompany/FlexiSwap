import React, { PropsWithChildren, useState } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { UnLoggedInView } from "pages/UnLoggedInView/UnLoggedInView";
import { useAuth } from "hooks";
import { AppRouter } from "shared/AppRouter/AppRouter";
import { FlexiButton } from "components/FlexiButton/FlexiButton";
import { MetamaskButton } from "components/MetamaskButton/MetamaskButton";

export const AppLayout: React.FC<PropsWithChildren> = () => {
  const { isAuthenticated } = useAuth();
  const [loading, setLoading] = useState(false);
  return (
    <>
      <FlexiButton loading={loading} onClick={() => setLoading(true)}>
        Press me
      </FlexiButton>
      <MetamaskButton onClick={() => setLoading(false)}>
        Press me
      </MetamaskButton>
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
