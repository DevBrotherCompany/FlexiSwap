import React, { FC } from "react";
import { useFlexiInputStyles } from "./FlexiInput.style";

import cn from "classnames";
import { TextField, TextFieldProps } from "@mui/material";

type FlexiInputProps = TextFieldProps & {};

export const FlexiInput: FC<FlexiInputProps> = ({
  variant = "filled",
  inputProps,
  fullWidth = true,
  ...props
}) => {
  const classes = useFlexiInputStyles();
  return (
    <TextField
      {...props}
      fullWidth={fullWidth}
      inputProps={{
        ...inputProps,
        className: cn(classes.input, inputProps?.className),
      }}
    />
  );
};
