import React from "react";
import { makeStyles } from "@mui/styles";
import cn from "classnames";

const useSubtitleStyles = makeStyles(() => ({
  text: {
    fontWeight: 500,
    fontSize: "28px",
    lineHeight: "42px",
  },
}));

interface SubtitleProps {
  className?: string;
}

export const Subtitle: React.FC<SubtitleProps> = ({ className, children }) => {
  const classes = useSubtitleStyles();
  return <h2 className={cn(classes.text, className)}>{children}</h2>;
};
