import React from "react";
import { useNftListStyles } from "./NftList.style";
import { INft } from "interfaces";

import { NftMoreBlock } from "../NftMoreBlock/NftMoreBlock";
import { useListInfo } from "./useListInfo";
import { FlexiNft } from "../../../../components/FlexiNft/FlexiNft";

interface NftListProps {
  list: INft[];
  onClick?: (item: INft) => void;
}

export const NftList: React.FC<NftListProps> = ({ list, onClick }) => {
  const classes = useNftListStyles();
  const { displayItems, isMany, additionalCount } = useListInfo(list);

  return (
    <ul className={classes.list}>
      {displayItems.map((nft) => (
        <li key={nft.id} className={classes.listItem}>
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
