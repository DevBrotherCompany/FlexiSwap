import React from "react";
import { useNftListStyles } from "./NftList.style";
import { FlexiNft } from "@/components/FlexiNft/FlexiNft";

import { NftMoreBlock } from "../NftMoreBlock/NftMoreBlock";
import { INftItem } from "@/interfaces";

import { useListInfo } from "./useListInfo";

interface NftListProps {
  list: INftItem[];
  onClick?: (item: INftItem) => void;
  isExpanded?: boolean;
}

export const NftList: React.FC<NftListProps> = ({
  list,
  onClick,
  isExpanded = false,
}) => {
  const classes = useNftListStyles();
  const itemsToShow = !isExpanded ? 3 : list.length;

  const { displayItems, isMany, additionalCount } = useListInfo(
    list,
    itemsToShow
  );

  return (
    <ul className={classes.list}>
      {displayItems.map((nft) => (
        <li key={nft.tokenId} className={classes.listItem}>
          <FlexiNft
            item={nft}
            hoverEffect={"info"}
            onClickNft={onClick}
            clickable
          />
        </li>
      ))}
      {isMany && (
        <li className={classes.listItem}>
          <NftMoreBlock count={additionalCount} />
        </li>
      )}
    </ul>
  );
};
