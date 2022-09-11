import React from "react";
import { useNftListStyles } from "./NftList.style";

import { INft } from "interfaces";

interface NftListProps {
  list: INft[];
}

export const NftList: React.FC<NftListProps> = ({ list }) => {
  const classes = useNftListStyles();
  const displayItems = list.slice(0, 3);
  return (
    <ul className={classes.list}>
      {displayItems.map((nft) => (
        <li className={classes.listItem}>
          <p className={classes.imgWrapper}>
            <img src={nft.img} alt={nft.name} className={classes.img} />
          </p>
        </li>
      ))}
    </ul>
  );
};
