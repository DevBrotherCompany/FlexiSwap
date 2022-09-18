import React, { PropsWithChildren } from "react";

import { Typography } from "@mui/material";
import { useSubtitleStyles } from "./FlexiSubtitle.style";

import cn from "classnames";

interface FlexiSubtitleProps extends PropsWithChildren {
  className?: string;
}

export const FlexiSubtitle: React.FC<FlexiSubtitleProps> = ({
  children,
  className,
}) => {
  const classes = useSubtitleStyles();
  return (
    <Typography variant={"h6"} className={cn(classes.text, className)}>
      {children}
    </Typography>
  );
};
