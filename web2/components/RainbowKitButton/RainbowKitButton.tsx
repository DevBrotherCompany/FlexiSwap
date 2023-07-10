"use client";
import {
  FlexiButton,
  FlexiButtonProps,
} from "@/components/FlexiButton/FlexiButton";
import { ConnectButton, useConnectModal } from "@rainbow-me/rainbowkit";
import cn from "classnames";
import { useRainbowKitButtonStyles } from "./RainbowKitkButton.styles";
import { useAuth } from "@/hooks";

interface RainbowKitButtonProps
  extends Omit<FlexiButtonProps, "loading" | "loadingPosition"> {}

export const RainbowKitButton: React.FC<RainbowKitButtonProps> = ({
  color = "secondary",
  children = "Connect wallet",
  className,
  ...props
}) => {
  const classes = useRainbowKitButtonStyles();
  const { isConnected } = useAuth();
  const { openConnectModal } = useConnectModal();
  return (
    <div className={cn(classes.btnContainer, className)}>
      {isConnected ? (
        <ConnectButton />
      ) : (
        <FlexiButton onClick={openConnectModal}>Select Wallet</FlexiButton>
      )}
    </div>
  );
};
