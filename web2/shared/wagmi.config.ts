import { configureChains } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import * as wagmiChains from "wagmi/chains";
import { getDefaultWallets } from "@rainbow-me/rainbowkit";
import { createConfig } from "wagmi";

const chain = process.env.NEXT_PUBLIC_CHAIN as keyof typeof wagmiChains;
const projectId = process.env.NEXT_PUBLIC_WALLECT_CONNECT_PROJECT_ID_DEV as string
const { chains, publicClient, webSocketPublicClient } = configureChains(
  [wagmiChains[chain]],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "FlexiSwap",
  chains,
  projectId: projectId,
});

const config = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
  webSocketPublicClient,
});

export { config, chains };
