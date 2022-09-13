import React from "react";
import { useNftListStyles } from "./NftList.style";

import { INft } from "interfaces";
import { useListInfo } from "./useListInfo";
import { NftMoreBlock } from "../NftMoreBlock/NftMoreBlock";

interface NftListProps {
  list: INft[];
}

export const NftList: React.FC<NftListProps> = ({ list }) => {
  const classes = useNftListStyles();
  const { displayItems, isMany, additionalCount } = useListInfo(list);
  return (
    <ul className={classes.list}>
      {displayItems.map((nft) => (
        <li key={nft.id} className={classes.listItem}>
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
