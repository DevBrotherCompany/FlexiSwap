import React, { PropsWithChildren } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import { UnLoggedInView } from "pages/UnLoggedInView/UnLoggedInView";
import { useAuth } from "hooks";
import { AppRouter } from "shared/AppRouter/AppRouter";

export const AppLayout: React.FC<PropsWithChildren> = () => {
  const { isAuthenticated } = useAuth();

  return (
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
  );
};
