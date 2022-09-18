import React, { PropsWithChildren } from "react";
import cn from "classnames";

import { makeStyles } from "@mui/styles";

export const useLimitStyles = makeStyles(() => ({
  text: {
    margin: 0,
    fontWeight: 600,
    fontSize: "15px",
    lineHeight: "18px",
  },
}));

interface LimitProps extends PropsWithChildren {
  className?: string;
}

export const Limit: React.FC<LimitProps> = ({ className, children }) => {
  const classes = useLimitStyles();
  return <h6 className={cn(classes.text, className)}>{children}</h6>;
};
