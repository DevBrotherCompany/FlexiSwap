import React, { FC } from "react";
import { useFlexiLinkStyles } from "./FlexiLink.style";

import { Link } from "react-router-dom";

import { ButtonBase } from "@mui/material";
import cn from "classnames";

interface FlexiLinkProps {
  to?: string;
  className?: string;
  active?: boolean;
  withButtonBase?: boolean;
  disabled?: boolean;
}

export const FlexiLink: FC<FlexiLinkProps> = ({
  to = "#",
  active,
  className,
  withButtonBase = true,
  disabled,
  children,
}) => {
  const classes = useFlexiLinkStyles();
  return withButtonBase && !disabled ? (
    <ButtonBase
      className={cn(classes.buttonBase, className, {
        [classes.activeButtonBase]: active,
      })}
      component={"span"}
    >
      <Link
        to={to}
        className={cn(classes.link, classes.linkButton, {
          [classes.active]: active,
        })}
      >
        {children}
      </Link>
    </ButtonBase>
  ) : (
    <Link
      to={to}
      className={cn(classes.link, className, {
        [classes.active]: active,
        [classes.disabled]: disabled,
      })}
    >
      {children}
    </Link>
  );
};
