import React from "react";
import { useChooseNftListStyles } from "./ChooseNftList.style";

import { List, ListItem } from "@mui/material";

import { INftItem } from "interfaces";

import { FlexiNft } from "components/FlexiNft/FlexiNft";
import { AnyOfCollectionNft } from "../AnyOfCollectionNft/AnyOfCollectionNft";

interface ChooseNftListProps {
  nfts: INftItem[];
  onClickNft?: (item: INftItem) => void;
}

export const ChooseNftList: React.FC<ChooseNftListProps> = ({
  nfts,
  onClickNft,
}) => {
  const classes = useChooseNftListStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <AnyOfCollectionNft />
      </ListItem>
      {nfts.map((nft) => (
        <ListItem key={nft.tokenId} className={classes.listItem}>
          <FlexiNft
            item={nft}
            clickable
            onClickNft={onClickNft}
            hoverEffect={"tick"}
          />
        </ListItem>
      ))}
    </List>
  );
};
