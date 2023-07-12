import { useImageStyles } from "./Image.style";
import cn from "classnames";

import DefaultImage from "@/public/assets/images/img.png";
import { useCallback } from "react";

interface ImageProps {
  src?: string | null;
  alt?: string | null;
  className?: string;
  onClick?: (item: any) => void;
}

export const Image: React.FC<ImageProps> = ({
  className,
  src,
  alt,
  onClick,
}) => {
  const classes = useImageStyles();

  const onError = useCallback((e: React.FormEvent<HTMLImageElement>) => {
    e.currentTarget.setAttribute("src", DefaultImage.src);
  }, []);

  return (
    <p className={cn(classes.imgWrapper, className)} onClick={onClick}>
      <img
        src={src ?? DefaultImage.src}
        alt={alt ?? "--"}
        className={classes.img}
        onError={onError}
      />
    </p>
  );
};
