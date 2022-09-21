import React from "react";
import { useYourSelectionListStyles } from "./YourSelectionList.style";

import cn from "classnames";
import { List, ListItem } from "@mui/material";

import { INft } from "interfaces";
import { FlexiNft } from "components/FlexiNft/FlexiNft";

interface YourSelectionListProps {
  selected: INft[];
  onClickNft?: (item: INft) => void;
}

export const YourSelectionList: React.FC<YourSelectionListProps> = ({
  selected,
  onClickNft,
}) => {
  const classes = useYourSelectionListStyles();
  return (
    <List className={classes.list}>
      {selected.map((item, index) => (
        <ListItem
          key={item.id}
          className={cn(classes.listItem, { [classes.lastItem]: index > 7 })}
        >
          <FlexiNft
            item={item}
            className={classes.img}
            onClickNft={onClickNft}
            clickable
            hoverEffect={"cross"}
          />
        </ListItem>
      ))}
    </List>
  );
};
