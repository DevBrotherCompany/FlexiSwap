import { WagmiConfig } from "wagmi";
import { chains, config } from "../wagmi.config";
import { RainbowKitProvider } from "@rainbow-me/rainbowkit";

interface Web3ConnectorProps {
  children: React.ReactNode;
}

export const Web3Connector: React.FC<Web3ConnectorProps> = ({ children }) => {
  return (
    <WagmiConfig config={config}>
      <RainbowKitProvider chains={chains}>{children}</RainbowKitProvider>
    </WagmiConfig>
  );
};
