import { FC } from "react";

import { INftItem } from "@/interfaces";
import {
  FlexiThumbnail,
  FlexiThumbnailProps,
} from "../FlexiThumbnail/FlexiThumbnail";

interface FlexiNftProps extends Omit<FlexiThumbnailProps, "items" | "onClick"> {
  item: INftItem;
  onClickNft?: (item: INftItem) => void;
}

export type FlexiNftStyle = Partial<FlexiNftProps>;

export const FlexiNft: FC<FlexiNftProps> = ({ item, onClickNft, ...props }) => {
  return (
    <FlexiThumbnail
      items={[item]}
      onClick={() => onClickNft && onClickNft(item)}
      {...props}
    />
  );
};
