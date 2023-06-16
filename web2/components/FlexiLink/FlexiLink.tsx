import React, { FC } from "react";
import { useFlexiLinkStyles } from "./FlexiLink.style";
import cn from "classnames";
import Link from "next/link";

interface FlexiLinkProps {
  href?: string;
  className?: string;
  active?: boolean;
  withButtonBase?: boolean;
  disabled?: boolean;
  children: React.ReactNode;
}

export const FlexiLink: FC<FlexiLinkProps> = ({
  href = "#",
  active,
  className,
  withButtonBase = true,
  disabled,
  children,
}) => {
  const classes = useFlexiLinkStyles();
  return withButtonBase && !disabled ? (
    <div
      className={cn(classes.buttonBase, className, {
        [classes.activeButtonBase]: active,
      })}
    >
      <Link
        href={href}
        className={cn(classes.link, classes.linkButton, {
          [classes.active]: active,
        })}
      >
        {children}
      </Link>
    </div>
  ) : (
    <Link
      href={href}
      className={cn(classes.link, className, {
        [classes.active]: active,
        [classes.disabled]: disabled,
      })}
    >
      {children}
    </Link>
  );
};
