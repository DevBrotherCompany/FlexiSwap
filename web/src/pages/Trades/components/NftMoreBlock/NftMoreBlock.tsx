import React from "react";
import { useNftMoreBlockStyles } from "./NftMoreBlock.style";

interface NftMoreBlockProps {
  count: number;
}

export const NftMoreBlock: React.FC<NftMoreBlockProps> = ({ count }) => {
  const classes = useNftMoreBlockStyles();
  return (
    <div className={classes.block}>
      <span className={classes.text}>+{count}</span>
    </div>
  );
};
