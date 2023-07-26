import { useYourSelectionStyles } from "./YourSelection.style";

import { INftItem } from "@/interfaces";
import { FlexiButton } from "@/components/FlexiButton/FlexiButton";

import { SectionTitle } from "../Text/SectionTitle";
import {
  YourSelectionList,
  YourSelectionListProps,
} from "../YourSelectionList/YourSelectionList";
import { Limit } from "../Text/Limit";

interface YourSelectionProps extends YourSelectionListProps {
  onBtnClick?: () => void;
  labelBtn?: string;
  disabledBtn?: boolean;
}

export const YourSelection: React.FC<YourSelectionProps> = ({
  selected,
  onClickNft,
  onCollectionClick,
  onBtnClick,
  labelBtn = "Create offers",
  disabledBtn = false,
}) => {
  const classes = useYourSelectionStyles();
  const selectedLength = selected.length;
  const areNftsSelected = selectedLength > 0;

  return (
    <>
      <section className={classes.container}>
        <SectionTitle>Your selection</SectionTitle>
        <YourSelectionList
          onClickNft={onClickNft}
          onCollectionClick={onCollectionClick}
          selected={selected}
        />
      </section>
      <Limit>{selectedLength} of 10 NFTs selected</Limit>
      <div className={classes.btnContainer}>
        <FlexiButton
          onClick={onBtnClick}
          disabled={!areNftsSelected || disabledBtn}
        >
          {labelBtn}
        </FlexiButton>
      </div>
    </>
  );
};
