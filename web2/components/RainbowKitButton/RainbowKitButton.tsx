"use client";
import { FlexiButtonProps } from "@/components/FlexiButton/FlexiButton";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import cn from "classnames";
import { useRainbowKitButtonStyles } from "./RainbowKitkButton.styles";

interface RainbowKitButtonProps
  extends Omit<FlexiButtonProps, "loading" | "loadingPosition"> {}

export const RainbowKitButton: React.FC<RainbowKitButtonProps> = ({
  color = "secondary",
  children = "Connect wallet",
  className,
  ...props
}) => {
  const classes = useRainbowKitButtonStyles();
  return (
    <div className={cn(classes.btnContainer, className)}>
      <ConnectButton />
    </div>
  );
};
