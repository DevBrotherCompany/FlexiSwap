import React from "react";
import { makeStyles } from "@mui/styles";

import cn from "classnames";

const useTitleStyles = makeStyles(() => ({
  text: {
    fontWeight: 800,
    fontSize: "40px",
    lineHeight: "60px",
  },
}));

interface TitleProps {
  className?: string;
}

export const Title: React.FC<TitleProps> = ({ className, children }) => {
  const classes = useTitleStyles();
  return <h1 className={cn(classes.text, className)}>{children}</h1>;
};
