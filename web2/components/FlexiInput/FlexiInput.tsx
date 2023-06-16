import React, { DetailedHTMLProps, FC, InputHTMLAttributes } from "react";
import { useFlexiInputStyles } from "./FlexiInput.style";

import cn from "classnames";

type FlexiInputProps = DetailedHTMLProps<
  InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  variant?: "filled" | "outlined";
  error?: boolean;
  fullWidth?: boolean;
};

export const FlexiInput: FC<FlexiInputProps> = ({
  variant = "filled",
  fullWidth = true,
  error = false,
  className,
  ...props
}) => {
  const classes = useFlexiInputStyles();
  return (
    <input
      type="text"
      {...props}
      className={cn(classes.input, classes[`${variant}`], className, {
        [classes.error]: error,
        [classes.disabled]: props.disabled,
        [classes.fullWidth]: fullWidth
      })}
    />
  );
};
