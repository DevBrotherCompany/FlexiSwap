import { FC } from "react";
import { useFlexiTitleStyles } from "./FlexiTitle.style";
import cn from "classnames";

interface FlexiTitleProps {
  className?: string;
  children: React.ReactNode;
}

export const FlexiTitle: FC<FlexiTitleProps> = ({ className, children }) => {
  const classes = useFlexiTitleStyles();
  return <h1 className={cn(classes.title, className)}>{children}</h1>;
};
