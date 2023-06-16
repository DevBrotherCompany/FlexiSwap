import { useSubtitleStyles } from "./FlexiSubtitle.styles";

import cn from "classnames";

interface FlexiSubtitleProps {
  className?: string;
  children: React.ReactNode;
}

export const FlexiSubtitle: React.FC<FlexiSubtitleProps> = ({
  children,
  className,
}) => {
  const classes = useSubtitleStyles();
  return <h6 className={cn(classes.text, className)}>{children}</h6>;
};
