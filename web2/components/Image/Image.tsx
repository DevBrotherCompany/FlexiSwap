import { useImageStyles } from "./Image.style";
import cn from "classnames";

import DefaultImage from "@/public/assets/images/img.png";

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
  return (
    <p className={cn(classes.imgWrapper, className)} onClick={onClick}>
      <img
        src={src ?? DefaultImage}
        alt={alt ?? "--"}
        className={classes.img}
      />
    </p>
  );
};
