'use client'
import { FlexiInput } from "@/components/FlexiInput/FlexiInput";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useToolbarStyles } from "./Toolbar.styles";
import cn from "classnames";

type ToolbarProps = DetailedHTMLProps<
  HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
> & {};

const Toolbar: React.FC<ToolbarProps> = ({ className, ...props }) => {
  const classes = useToolbarStyles();
  return (
    <div {...props} className={cn(classes.toolbar, className)}>
      <FlexiInput disabled />
    </div>
  );
};

export default Toolbar;
