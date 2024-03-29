import React from "react";
import { makeStyles } from "@mui/styles";

import { Style } from "@/shared/variables";
import cn from "classnames";

export const useHeaderStyles = makeStyles(() => ({
  text: {
    fontWeight: 600,
    fontSize: "24px",
    lineHeight: "28px",
    color: Style.additionalBackground,
    margin: 0,
  },
}));

interface HeaderProps {
  className?: string;
  children: React.ReactNode;
}

export const Header: React.FC<HeaderProps> = ({ className, children }) => {
  const classes = useHeaderStyles();
  return <h4 className={cn(className, classes.text)}>{children}</h4>;
};
