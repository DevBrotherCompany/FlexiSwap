import React, { FC } from "react";

import { ButtonProps } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export interface FlexiButtonProps extends ButtonProps {
  loading?: boolean;
  loadingPosition?: "start" | "end";
}

const FlexiButton: FC<FlexiButtonProps> = ({
  children,
  loadingPosition = "end",
  variant = "contained",
  ...props
}) => {
  return (
    <LoadingButton
      {...props}
      loadingPosition={loadingPosition}
      variant={variant}
    >
      {children}
    </LoadingButton>
  );
};

export default FlexiButton;
