import React from "react";
import cn from "classnames";

import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useColNameStyles = makeStyles((theme: Theme) => ({
  text: {
    color: theme.palette.primary.main,
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "36px",
    margin: 0,
    display: "inline-block",
  },
}));

interface ColNameProps {
  className?: string;
  children: React.ReactNode
}

export const ColName: React.FC<ColNameProps> = ({ className, children }) => {
  const classes = useColNameStyles();
  return <h5 className={cn(classes.text, className)}>{children}</h5>;
};
