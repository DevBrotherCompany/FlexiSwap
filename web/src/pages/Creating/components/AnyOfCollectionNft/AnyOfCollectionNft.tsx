import React from "react";
import { useAnyOfCollectionNftStyles } from "./AnyOfCollectionNft.style";

export const AnyOfCollectionNft: React.FC = () => {
  const classes = useAnyOfCollectionNftStyles();
  return (
    <div className={classes.item}>
      <span className={classes.text}>Any of collection</span>
    </div>
  );
};
