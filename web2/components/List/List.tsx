import cn from "classnames";
import { DetailedHTMLProps, HTMLAttributes } from "react";
import { useListStyles } from "./List.styles";

interface ListProps
  extends DetailedHTMLProps<
    HTMLAttributes<HTMLUListElement>,
    HTMLUListElement
  > {
  children: React.ReactNode;
  className?: string;
}

export const List: React.FC<ListProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = useListStyles();
  return (
    <ul {...props} className={cn(className, classes.list)}>
      {children}
    </ul>
  );
};
