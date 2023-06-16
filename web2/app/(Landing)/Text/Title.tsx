import React from "react";
import cn from "classnames";

const useTitleStyles = () => ({
  text: "font-extrabold text-[40px] leading-[60px]"
})

interface TitleProps {
  className?: string;
  children: React.ReactNode;
}

export const Title: React.FC<TitleProps> = ({ className, children }) => {
  const classes = useTitleStyles();
  return <h1 className={cn(classes.text, className)}>{children}</h1>;
};
