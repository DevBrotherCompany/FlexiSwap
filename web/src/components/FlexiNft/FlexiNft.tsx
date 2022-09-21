import React, { FC } from "react";
import cn from "classnames";
import { useFlexiNftStyles } from "./FlexiNft.style";

import { INft } from "interfaces";
import { Image } from "shared/Image/Image";

import { SvgIcon } from "./svgs";

interface FlexiNftProps {
  item: INft;
  width?: number | string;
  height?: number | string;
  className?: string;
  clickable?: boolean;
  onClickNft?: (item: INft) => void;
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

  const handleClickNft = (item: INft) => {
    clickable && onClickNft && onClickNft(item);
  };

  const isCenteredEffect = hoverEffect === "tick" || hoverEffect === "cross";
  const isInTopRight = hoverEffect === "info";

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
        src={item.img}
        alt={item.name}
        className={cn(classes.img, className, {
          [classes.clickable]: clickable,
        })}
        // onClick={() => handleClickNft(item)}
      />
    </div>
  ) : (
    <Image
      src={item.img}
      alt={item.name}
      className={cn(classes.img, className, {
        [classes.clickable]: clickable,
      })}
      onClick={() => handleClickNft(item)}
    />
  );
};
