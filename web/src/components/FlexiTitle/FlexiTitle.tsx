import React, { FC } from "react";
import { useFlexiTitleStyles } from "./FlexiTitle.style";
import { Typography } from "@mui/material";
import cn from "classnames";

interface FlexiTitleProps {
  className?: string;
}

export const FlexiTitle: FC<FlexiTitleProps> = ({ className, children }) => {
  const classes = useFlexiTitleStyles();
  return (
    <Typography variant={"h1"} className={cn(classes.title, className)}>
      {children}
    </Typography>
  );
};
