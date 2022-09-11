import React, { PropsWithChildren } from "react";

import { Typography } from "@mui/material";
import { makeStyles } from "@mui/styles";

import cn from "classnames";

export const useSubtitleStyles = makeStyles(() => ({
  text: {
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "17px !important",
    color: "#696161",
  },
}));

interface SubtitleProps extends PropsWithChildren {
  className?: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ children, className }) => {
  const classes = useSubtitleStyles();
  return (
    <Typography variant={"h6"} className={cn(classes.text, className)}>
      {children}
    </Typography>
  );
};
