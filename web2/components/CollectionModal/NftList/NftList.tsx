import React from "react";
import { useNftListStyles } from "./NftList.style";

import { List, ListItem } from "@mui/material";
import { Image } from "@/components/Image/Image";

import { IPreviewItem } from "@/interfaces";

interface NftListProps {
  items: IPreviewItem[];
}

export const NftList: React.FC<NftListProps> = ({ items }) => {
  const classes = useNftListStyles();
  return (
    <List className={classes.list}>
      {items.map(({ file }) => (
        <ListItem key={file} className={classes.listItem}>
          <Image src={file} alt={"nft image"} className={classes.img} />
        </ListItem>
      ))}
    </List>
  );
};
