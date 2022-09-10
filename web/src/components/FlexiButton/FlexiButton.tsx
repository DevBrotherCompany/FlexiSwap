import React, { FC, ReactNode } from "react";
import { useFlexiButtonStyles } from "./FlexiButton.styles";

import cn from "classnames";
import { ButtonProps } from "@mui/material";
import LoadingButton from "@mui/lab/LoadingButton";

export interface FlexiButtonProps extends ButtonProps {
  loading?: boolean;
  loadingPosition?: "start" | "end";
  loadingIndicator?: ReactNode;
  slim?: boolean;
}

export const FlexiButton: FC<FlexiButtonProps> = ({
  children,
  variant = "contained",
  slim,
  className,
  ...props
}) => {
  const classes = useFlexiButtonStyles();
  return (
    <LoadingButton
      {...props}
      className={cn(className, { [classes.slim]: slim })}
      variant={variant}
    >
      {children}
    </LoadingButton>
  );
};
