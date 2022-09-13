import React from "react";
import { useNftCollectionBlockStyles } from "./NftCollectionBlock.style";

export const NftCollectionBlock: React.FC = () => {
  const classes = useNftCollectionBlockStyles();
  return <div className={classes.block}>Collection</div>;
};
