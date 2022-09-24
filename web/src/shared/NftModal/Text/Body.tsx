import React from "react";
import { makeStyles } from "@mui/styles";
import cn from "classnames";
import { Style } from "shared/variables";

export const useBodyStyles = makeStyles(() => ({
  text: {
    fontWeight: 600,
    fontSize: "30px",
    lineHeight: "36px",
    margin: 0,
    paddingTop: "17px",
    color: Style.additionalPrimary,
  },
}));

interface BodyProps {
  className?: string;
}

export const Body: React.FC<BodyProps> = ({ className, children }) => {
  const classes = useBodyStyles();
  return <p className={cn(className, classes.text)}>{children}</p>;
};
