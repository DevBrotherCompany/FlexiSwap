import React, { FC } from "react";
import { useFlexiCardStyles } from "./FlexiCard.style";

import { Card, CardContent, CardProps } from "@mui/material";
import cn from "classnames";

interface FlexiCardProps extends CardProps {}

export const FlexiCard: FC<FlexiCardProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = useFlexiCardStyles();
  return (
    <Card {...props} className={cn(classes.card, className)}>
      <CardContent>{children}</CardContent>
    </Card>
  );
};
