import React from "react";
import { useYourSelectionStyles } from "./YourSelection.style";

import { INft } from "interfaces";
import { FlexiButton } from "components/FlexiButton/FlexiButton";

import { SectionTitle } from "../Text/SectionTitle";
import { YourSelectionList } from "../YourSelectionList/YourSelectionList";
import { Limit } from "../Text/Limit";

interface YourSelectionProps {
  selected: INft[];
  onBtnClick?: () => void;
  onClickNft?: (item: INft) => void;
  labelBtn?: string;
}

export const YourSelection: React.FC<YourSelectionProps> = ({
  selected,
  onClickNft,
  onBtnClick,
  labelBtn = "Create offers",
}) => {
  const classes = useYourSelectionStyles();
  const areNftsSelected = selected.length > 0;

  return (
    <>
      <section className={classes.container}>
        <SectionTitle>Your selection</SectionTitle>
        <YourSelectionList onClickNft={onClickNft} selected={selected} />
      </section>
      <Limit>{selected.length} of 10 NFTs selected</Limit>
      <div className={classes.btnContainer}>
        <FlexiButton onClick={onBtnClick} disabled={!areNftsSelected}>
          {labelBtn}
        </FlexiButton>
      </div>
    </>
  );
};
