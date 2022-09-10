import React from "react";
import { useSidebarListStyles } from "./sidebar-list.style";

import { useLocation } from "react-router-dom";
import { List, ListItem } from "@mui/material";

import { FlexiLink } from "components/FlexiLink/FlexiLink";
import { list } from "./list";

interface SidebarListProps {}

export const SidebarList: React.FC<SidebarListProps> = () => {
  const classes = useSidebarListStyles();
  const { pathname } = useLocation();
  return (
    <List>
      {list.map(({ title, link }) => (
        <ListItem key={title} className={classes.listItem}>
          <FlexiLink to={link} active={pathname.includes(link)}>
            {title}
          </FlexiLink>
        </ListItem>
      ))}
    </List>
  );
};
