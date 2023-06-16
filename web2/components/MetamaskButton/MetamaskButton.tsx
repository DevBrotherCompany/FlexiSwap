"use client";

import MetamaskIcon from "./assets/MetamaskIcon.svg";
import {
  FlexiButton,
  FlexiButtonProps,
} from "@/components/FlexiButton/FlexiButton";
import { useAuth } from "@/hooks";
import Image from "next/image";
import { Message } from "@/shared/variables";
import { useMetamaskButtonStyles } from "./MetamaskButton.styles";
import cn from "classnames";

interface MetamaskButtonProps
  extends Omit<FlexiButtonProps, "loading" | "loadingPosition"> {}

export const MetamaskButton: React.FC<MetamaskButtonProps> = ({
  color = "secondary",
  children = "Connect wallet",
  className,
  ...props
}) => {
  const { account, login } = useAuth();
  const classes = useMetamaskButtonStyles();
  const handleClick = () => {
    login({ signingMessage: Message.HelloFromFlexiSwap });
  };
  if (account) return null;

  return (
    <div className={cn(classes.btnContainer, className)}>
      <FlexiButton
        {...props}
        endIcon={<Image src={MetamaskIcon} alt="Metamask Icon" />}
        color={color}
        onClick={handleClick}
      >
        {children}
      </FlexiButton>
    </div>
  );
};
