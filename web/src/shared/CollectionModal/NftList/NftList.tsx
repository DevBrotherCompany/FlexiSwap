import React from "react";
import { INft } from "interfaces";
import { useNftListStyles } from "./NftList.style";

import { List, ListItem } from "@mui/material";
import { FlexiNft } from "components/FlexiNft/FlexiNft";

interface NftListProps {
  items: INft[];
}

export const NftList: React.FC<NftListProps> = ({ items }) => {
  const classes = useNftListStyles();
  return (
    <List className={classes.list}>
      {items.map((item) => (
        <ListItem key={item.id} className={classes.listItem}>
          <FlexiNft item={item} />
        </ListItem>
      ))}
    </List>
  );
};
