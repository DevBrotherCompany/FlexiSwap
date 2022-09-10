import React, { FC, PropsWithChildren } from "react";
import { useFlexiLinkStyles } from "./FlexiLink.style";

import { Link } from "react-router-dom";

import { ButtonBase } from "@mui/material";
import cn from "classnames";

interface FlexiLinkProps extends PropsWithChildren {
  to?: string;
  className?: string;
  active?: boolean;
}

export const FlexiLink: FC<FlexiLinkProps> = ({
  to = "#",
  active,
  className,
  children,
}) => {
  const classes = useFlexiLinkStyles();
  return (
    <ButtonBase
      className={cn(classes.buttonBase, className, {
        [classes.activeButtonBase]: active,
      })}
      component={"span"}
    >
      <Link to={to} className={cn(classes.link, { [classes.active]: active })}>
        {children}
      </Link>
    </ButtonBase>
  );
};
