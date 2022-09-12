import React, { PropsWithChildren } from "react";
import { makeStyles } from "@mui/styles";

import cn from "classnames";
import { Typography } from "@mui/material";

interface WalletAddressProps extends PropsWithChildren {
  className?: string;
}

export const useUserNames = makeStyles(() => ({
  text: { opacity: ".7" },
}));

export const WalletAddress: React.FC<WalletAddressProps> = ({
  className,
  children,
}) => {
  const classes = useUserNames();
  return (
    <Typography className={cn(classes.text, className)} component={"span"}>
      {children}
    </Typography>
  );
};
