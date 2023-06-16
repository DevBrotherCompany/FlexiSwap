import React from "react";

import { makeStyles } from "@mui/styles";
import { Style } from "@/shared/variables";
import cn from "classnames";

export const useTitleStyles = makeStyles(() => ({
  text: {
    color: Style.additionalBackground,
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "28px",
    margin: 0,
    display: "inline-block",
  },
}));

interface TitleProps {
  className?: string;
  children: React.ReactNode
}

export const Title: React.FC<TitleProps> = ({ className, children }) => {
  const classes = useTitleStyles();
  return <h4 className={cn(classes.text, className)}>{children}</h4>;
};
