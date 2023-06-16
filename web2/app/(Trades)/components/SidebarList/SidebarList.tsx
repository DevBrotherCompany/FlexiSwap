"use client";

import React from "react";
import { useSidebarListStyles } from "./SidebarList.styles";
import { usePathname } from "next/navigation";

import { list } from "./list";
import { List, ListItem } from "@/components/List";
import { FlexiLink } from "@/components/FlexiLink/FlexiLink";

interface SidebarListProps {}

export const SidebarList: React.FC<SidebarListProps> = () => {
  const classes = useSidebarListStyles();
  const pathname = usePathname();

  const checkActive = (link: string) => {
    return pathname.startsWith(link);
  };

  return (
    <List className={classes.list}>
      {list.map(({ title, link }) => (
        <ListItem key={title} className={classes.listItem}>
          <FlexiLink href={link} active={checkActive(link)}>
            {title}
          </FlexiLink>
        </ListItem>
      ))}
    </List>
  );
};
