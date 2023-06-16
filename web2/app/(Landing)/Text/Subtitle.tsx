import React from "react";
import cn from "classnames";

const useSubtitleStyles = () => ({
  text: "font-medium text-[28px] leading-[42px]",
});

interface SubtitleProps {
  className?: string;
  children: React.ReactNode;
}

export const Subtitle: React.FC<SubtitleProps> = ({ className, children }) => {
  const classes = useSubtitleStyles();
  return <h2 className={cn(classes.text, className)}>{children}</h2>;
};
