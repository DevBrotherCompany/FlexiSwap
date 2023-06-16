import { useYourSelectionStyles } from "./YourSelection.style";

import { INftItem } from "@/interfaces";
import { FlexiButton } from "@/components/FlexiButton/FlexiButton";

import { SectionTitle } from "../Text/SectionTitle";
import { YourSelectionList } from "../YourSelectionList/YourSelectionList";
import { Limit } from "../Text/Limit";

interface YourSelectionProps {
  selected: INftItem[];
  onBtnClick?: () => void;
  onClickNft?: (item: INftItem) => void;
  labelBtn?: string;
  disabledBtn?: boolean;
}

export const YourSelection: React.FC<YourSelectionProps> = ({
  selected,
  onClickNft,
  onBtnClick,
  labelBtn = "Create offers",
  disabledBtn = false,
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
