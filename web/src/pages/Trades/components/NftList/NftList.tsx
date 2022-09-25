import React from "react";
import { useNftListStyles } from "./NftList.style";
import { FlexiNft } from "components/FlexiNft/FlexiNft";

import { NftMoreBlock } from "../NftMoreBlock/NftMoreBlock";
import { INftItem } from "interfaces";

import { useListInfo } from "./useListInfo";

// import { CollectionItem } from "packages/graphql/generated";

interface NftListProps {
  list: INftItem[];
  onClick?: (item: INftItem) => void;
}

export const NftList: React.FC<NftListProps> = ({ list, onClick }) => {
  const classes = useNftListStyles();
  const { displayItems, isMany, additionalCount } = useListInfo(list);

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
