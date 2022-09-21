import React from "react";
import { useNftCollectionBlockStyles } from "./NftCollectionBlock.style";

import CollectionImage from "assets/images/nft-collection.png";

import { INft } from "interfaces";
import { Image } from "shared/Image/Image";

interface NftCollectionBlockProps {
  collection: INft[];
  onClick?: (col: INft[]) => void;
}

export const NftCollectionBlock: React.FC<NftCollectionBlockProps> = ({
  collection,
  onClick,
}) => {
  const classes = useNftCollectionBlockStyles();

  const handleClick = () => {
    onClick && onClick(collection);
  };

  return (
    <div className={classes.block}>
      <Image
        src={CollectionImage}
        alt={"nft collection"}
        onClick={handleClick}
      />
    </div>
  );
};
