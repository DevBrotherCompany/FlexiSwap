import React from "react";
import { useYourSelectionListStyles } from "./YourSelectionList.style";

import { List } from "@mui/material";

import { INft } from "interfaces";
import { YourSelectionListItem } from "./YourSelectionListItem";

interface YourSelectionListProps {
  selected: INft[];
}

export const YourSelectionList: React.FC<YourSelectionListProps> = ({
  selected,
}) => {
  const classes = useYourSelectionListStyles();
  return (
    <List className={classes.list}>
      {selected.map((s, index) => (
        <YourSelectionListItem key={s.id} item={s} index={index} />
      ))}
    </List>
  );
};
