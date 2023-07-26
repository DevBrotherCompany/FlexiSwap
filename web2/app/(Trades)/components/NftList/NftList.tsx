import React from "react";
import { useNftListStyles } from "./NftList.style";
import { FlexiNft } from "@/components/FlexiNft/FlexiNft";

import { NftMoreBlock } from "../NftMoreBlock/NftMoreBlock";
import { INftItem, INullableItem } from "@/interfaces";

import { useListInfo } from "./useListInfo";
import FlexiNftCollection from "@/components/FlexiNftCollection/FlexiNftCollection";

interface NftListProps {
  list: INullableItem[];
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
      {displayItems.map((nft, index) => (
        <li key={`${index}:${nft.tokenAddress}`} className={classes.listItem}>
          {nft.tokenId ? (
            <FlexiNft
              item={nft as INftItem}
              hoverEffect={"info"}
              onClickNft={onClick}
              clickable
            />
          ) : (
            <FlexiNftCollection tokenAddress={nft.tokenAddress} />
          )}
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
