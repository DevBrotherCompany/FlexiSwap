import React from "react";
import { useNftCollectionBlockStyles } from "./NftCollectionBlock.style";

import CollectionImage from "@/public/assets/images/nft-collection.png";

import { Image } from "@/components/Image/Image";
import { INftCollection } from "@/interfaces";

interface NftCollectionBlockProps {
  collection: INftCollection;
  onClick?: (col: INftCollection) => void;
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
        src={collection.logo ?? CollectionImage}
        alt={"nft collection"}
        onClick={handleClick}
      />
    </div>
  );
};
