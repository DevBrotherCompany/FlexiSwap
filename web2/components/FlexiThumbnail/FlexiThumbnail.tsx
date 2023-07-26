import React, { FC } from "react";
import cn from "classnames";

import { INftItem } from "@/interfaces";
import { Image } from "@/components/Image/Image";

import { SvgIcon } from "./svgs";
import { useFlexiThumbnailStyles } from "./FlexiThumbnail.style";

export interface FlexiThumbnailProps {
  items: INftItem[];
  width?: number | string;
  height?: number | string;
  className?: string;
  clickable?: boolean;
  onClick?: () => void;
  hoverEffect?: "tick" | "cross" | "info";
}

export type FlexiThumbnailStyle = Partial<FlexiThumbnailProps>;

export const FlexiThumbnail: FC<FlexiThumbnailProps> = ({
  items,
  className,
  clickable = false,
  onClick,
  hoverEffect,
  ...props
}) => {
  const classes = useFlexiThumbnailStyles(props);

  const handleClick = () => {
    clickable && onClick && onClick();
  };

  const isCenteredEffect = hoverEffect === "tick" || hoverEffect === "cross";
  const isInTopRight = hoverEffect === "info";

  return (
    <div className={classes.hoverContainer} onClick={() => handleClick()}>
      {hoverEffect && (
        <div
          className={cn(classes.hoverBackdrop, {
            [classes.center]: isCenteredEffect,
            [classes.topRight]: isInTopRight,
          })}
        >
          {SvgIcon[hoverEffect]}
        </div>
      )}
      <div
        className={cn(classes.imagesContainer, {
          [classes.column]: items.length === 2,
        })}
      >
        {items.map(({ file, name }, idx) => (
          <Image
            src={file}
            alt={name}
            className={cn(classes.imageWrapper, className, {
              [classes.halfHeight]: items.length > 1,
              [classes.halfWidth]:
                (items.length === 3 && idx < 2) || items.length === 4,
              [classes.fullWidth]: items.length === 3 && idx === 2,
              [classes.fullSize]: items.length === 1,
              [classes.clickable]: clickable,
              ["hidden"]: idx > 3
            })}
          />
        ))}
      </div>
    </div>
  );
};
