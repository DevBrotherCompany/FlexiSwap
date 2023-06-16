import React, { FC } from "react";
import cn from "classnames";
import { useFlexiNftStyles } from "./FlexiNft.style";

import { INftItem } from "@/interfaces";
// import { INft } from "interfaces/old";
import { Image } from "@/components/Image/Image";

import { SvgIcon } from "./svgs";

interface FlexiNftProps {
  item: INftItem;
  width?: number | string;
  height?: number | string;
  className?: string;
  clickable?: boolean;
  onClickNft?: (item: INftItem) => void;
  hoverEffect?: "tick" | "cross" | "info";
}

export type FlexiNftStyle = Partial<FlexiNftProps>;

export const FlexiNft: FC<FlexiNftProps> = ({
  item,
  className,
  clickable = false,
  onClickNft,
  hoverEffect,
  ...props
}) => {
  const classes = useFlexiNftStyles(props);

  const handleClickNft = (item: INftItem) => {
    clickable && onClickNft && onClickNft(item);
  };

  const isCenteredEffect = hoverEffect === "tick" || hoverEffect === "cross";
  const isInTopRight = hoverEffect === "info";

  console.log("===item===", item);

  return hoverEffect ? (
    <div
      className={classes.hoverContainer}
      onClick={() => handleClickNft(item)}
    >
      <div
        className={cn(classes.hoverBackdrop, {
          [classes.center]: isCenteredEffect,
          [classes.topRight]: isInTopRight,
        })}
      >
        {SvgIcon[hoverEffect]}
      </div>
      <Image
        src={item.file}
        alt={item.name}
        className={cn(classes.img, className, {
          [classes.clickable]: clickable,
        })}
        // onClick={() => handleClickNft(item)}
      />
    </div>
  ) : (
    <Image
      src={item.file}
      alt={item.name}
      className={cn(classes.img, className, {
        [classes.clickable]: clickable,
      })}
      onClick={() => handleClickNft(item)}
    />
  );
};
