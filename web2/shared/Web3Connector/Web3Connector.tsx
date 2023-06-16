"use client";
import { MoralisProvider } from "react-moralis";

interface Web3ConnectorProps {
  children: React.ReactNode;
}

export const Web3Connector: React.FC<Web3ConnectorProps> = ({ children }) => {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_KEY ?? ""}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL ?? ""}
    >
      {children}
    </MoralisProvider>
  );
};
