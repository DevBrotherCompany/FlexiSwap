import React from "react";

import { ReactComponent as MetamaskIcon } from "./assets/MetamaskIcon.svg";
import FlexiButton, { FlexiButtonProps } from "../FlexiButton/FlexiButton";

interface MetamaskButtonProps
  extends Omit<FlexiButtonProps, "loading" | "loadingPosition"> {}

export const MetamaskButton: React.FC<MetamaskButtonProps> = ({ children }) => {
  return <FlexiButton endIcon={<MetamaskIcon />}>{children}</FlexiButton>;
};
