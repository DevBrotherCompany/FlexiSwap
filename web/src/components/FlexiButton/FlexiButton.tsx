import React, { FC, ReactNode } from "react";

import { ButtonProps } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export interface FlexiButtonProps extends ButtonProps {
  loading?: boolean;
  loadingPosition?: "start" | "end";
  loadingIndicator?: ReactNode;
}

export const FlexiButton: FC<FlexiButtonProps> = ({
  children,
  variant = "contained",
  ...props
}) => {
  return (
    <LoadingButton {...props} variant={variant}>
      {children}
    </LoadingButton>
  );
};
