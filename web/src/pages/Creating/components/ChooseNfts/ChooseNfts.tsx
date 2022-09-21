import React from "react";
import { useChooseNftsStyles } from "./ChooseNfts.style";

import { INft } from "interfaces";
import { arrDifference } from "utils";

import { SectionTitle } from "../Text/SectionTitle";
import { ChooseNftList } from "../ChooseNftList/ChooseNftList";

interface ChooseNftsProps {
  nfts: INft[];
  onClickNft?: (item: INft) => void;
  filterFrom?: INft[];
}

export const ChooseNfts: React.FC<ChooseNftsProps> = ({
  nfts,
  filterFrom,
  ...props
}) => {
  const classes = useChooseNftsStyles();
  const displayArr = filterFrom ? arrDifference(nfts, filterFrom, "id") : nfts;

  return (
    <section className={classes.container}>
      <SectionTitle>Your NFTs</SectionTitle>
      <ChooseNftList {...props} nfts={displayArr} />
    </section>
  );
};
