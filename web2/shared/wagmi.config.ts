import { configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import * as wagmiChains from "wagmi/chains";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { createConfig } from "wagmi";

const { chains, publicClient, webSocketPublicClient } = configureChains(
  [wagmiChains[process.env.NEXT_PUBLIC_CHAIN]],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "FlexiSwap",
  chains,
  projectId: process.env.NEXT_PUBLIC_WALLECT_CONNECT_PROJECT_ID,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { config, chains };
