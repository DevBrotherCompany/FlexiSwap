import React from "react";
import { useImageStyles } from "./Image.style";

import cn from "classnames";

interface ImageProps {
  src?: string;
  alt?: string;
  className?: string;
}

export const Image: React.FC<ImageProps> = ({ className, src, alt }) => {
  const classes = useImageStyles();
  return (
    <p className={cn(classes.imgWrapper, className)}>
      <img src={src} alt={alt} className={classes.img} />
    </p>
  );
};
