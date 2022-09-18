import React from "react";

import { ListItem } from "@mui/material";
import { useYourSelectionListStyles } from "./YourSelectionList.style";

import { INft } from "interfaces";
import { Image } from "shared/Image/Image";
import cn from "classnames";

interface YourSelectionListItemProps {
  item: INft;
  index: number;
}

export const YourSelectionListItem: React.FC<YourSelectionListItemProps> = ({
  item,
  index,
}) => {
  const classes = useYourSelectionListStyles();
  return (
    <ListItem
      className={cn(classes.listItem, { [classes.lastItem]: index > 7 })}
    >
      <Image
        src={item.img}
        alt={`${item.name} image`}
        className={classes.img}
      />
    </ListItem>
  );
};
