import React from "react";
import { useNftListStyles } from "./NftList.style";
import { INft } from "interfaces";

import { NftMoreBlock } from "../NftMoreBlock/NftMoreBlock";
import { useListInfo } from "./useListInfo";

interface NftListProps {
  list: INft[];
  onClick?: (item: INft) => void;
}

export const NftList: React.FC<NftListProps> = ({ list, onClick }) => {
  const classes = useNftListStyles();
  const { displayItems, isMany, additionalCount } = useListInfo(list);

  const handleClckItem = (item: INft) => {
    onClick && onClick(item);
  };

  return (
    <ul className={classes.list}>
      {displayItems.map((nft) => (
        <li
          key={nft.id}
          className={classes.listItem}
          onClick={() => handleClckItem(nft)}
        >
          <p className={classes.imgWrapper}>
            <img src={nft.img} alt={nft.name} className={classes.img} />
          </p>
        </li>
      ))}
      {isMany && (
        <li className={classes.listItem}>
          <NftMoreBlock count={additionalCount} />
        </li>
      )}
      {/*<li className={classes.listItem}>*/}
      {/*  <NftCollectionBlock />*/}
      {/*</li>*/}
    </ul>
  );
};
