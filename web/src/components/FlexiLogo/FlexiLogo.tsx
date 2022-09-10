import React from "react";
import { useFlexiLogoStyles } from "./FlexiLogo.styles";

import cn from "classnames";
import { Typography } from "@mui/material";

interface FlexiLogoProps {
  className?: string;
}

export const FlexiLogo: React.FC<FlexiLogoProps> = ({ className }) => {
  const classes = useFlexiLogoStyles();
  return (
    <Typography
      variant={"h3"}
      component={"h1"}
      className={cn(classes.logo, className)}
    >
      FlexiSwap
    </Typography>
  );
};
