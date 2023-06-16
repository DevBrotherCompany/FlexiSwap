import cn from "classnames";
import { DetailedHTMLProps, LiHTMLAttributes } from "react";
import { useListItemStyles } from "./ListItem.styles";

interface ListItemProps
  extends DetailedHTMLProps<LiHTMLAttributes<HTMLLIElement>, HTMLLIElement> {
  children: React.ReactNode;
  className?: string;
}

export const ListItem: React.FC<ListItemProps> = ({
  children,
  className,
  ...props
}) => {
  const classes = useListItemStyles();
  return (
    <li {...props} className={cn(className, classes.listItem)}>
      {children}
    </li>
  );
};
