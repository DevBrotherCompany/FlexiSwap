import { DetailedHTMLProps, HTMLAttributes } from "react";
import cn from "classnames";
import { useContentStyles } from "./Content.styles";

type ContentProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

const Content: React.FC<ContentProps> = ({ children, className }) => {
  const classes = useContentStyles();
  return <div className={cn(classes.content, className)}>{children}</div>;
};

export default Content;
