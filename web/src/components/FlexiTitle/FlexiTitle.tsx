import React, { FC, PropsWithChildren } from "react";
import { useFlexiTitleStyles } from "./FlexiTitle.style";
import { Typography } from "@mui/material";

interface FlexiTitleProps extends PropsWithChildren {}

export const FlexiTitle: FC<FlexiTitleProps> = ({ children }) => {
  const classes = useFlexiTitleStyles();
  return (
    <Typography variant={"h1"} className={classes.title}>
      {children}
    </Typography>
  );
};
