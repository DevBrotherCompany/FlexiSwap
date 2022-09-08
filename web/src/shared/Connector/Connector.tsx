import React, { PropsWithChildren } from "react";
import { MoralisProvider } from "react-moralis";

import { AppLayout } from "shared/AppLayout/AppLayout";

export const Connector: React.FC<PropsWithChildren> = () => {
  return (
    <MoralisProvider
      appId={process.env.REACT_APP_APP_KEY ?? ""}
      serverUrl={process.env.REACT_APP_SERVER_URL ?? ""}
    >
      <AppLayout />
    </MoralisProvider>
  );
};
