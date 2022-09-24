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
  title?: string;
}

export const ChooseNfts: React.FC<ChooseNftsProps> = ({
  nfts,
  filterFrom,
  title = "Your NFTs",
  ...props
}) => {
  const classes = useChooseNftsStyles();
  const displayArr = filterFrom ? arrDifference(nfts, filterFrom, "id") : nfts;

  return (
    <section className={classes.container}>
      <SectionTitle>{title}</SectionTitle>
      <ChooseNftList {...props} nfts={displayArr} />
    </section>
  );
};
