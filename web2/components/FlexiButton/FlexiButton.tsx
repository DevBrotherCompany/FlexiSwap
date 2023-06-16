import React, { ButtonHTMLAttributes, FC, ReactNode } from "react";
import cn from "classnames";
import { useFlexiButtonStyles } from "./FlexiButton.styles";
import FlexiLoaderSVG from "@/components/FlexiLoaderSVG/FlexiLoaderSVG";

export interface FlexiButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  loadingPosition?: "start" | "end";
  loadingIndicator?: ReactNode;
  slim?: boolean;
  outlineColor?: "default" | "white";
  endIcon?: React.ReactNode;
  variant?: "contained" | "outlined";
  color?: "primary" | "secondary";
}

export const FlexiButton: FC<FlexiButtonProps> = ({
  children,
  outlineColor = "default",
  slim,
  variant = "contained",
  className,
  color = "primary",
  endIcon,
  loading = false,
  ...props
}) => {
  const classes = useFlexiButtonStyles();
  return (
    <button
      {...props}
      className={cn(classes.btn, className, classes[`${variant}`][`${color}`], {
        [classes.slim]: slim,
        [classes.white]: outlineColor === "white",
        [classes.disabled]: props.disabled,
      })}
    >
      {loading && (
        <span className={classes.loader}>
          <FlexiLoaderSVG />
        </span>
      )}
      <span>{children}</span>
      {endIcon && <span className={classes.endIcon}>{endIcon}</span>}
    </button>
  );
};
