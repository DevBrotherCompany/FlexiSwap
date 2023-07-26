import { makeStyles } from "@mui/styles";
import { FlexiThumbnailStyle } from "./FlexiThumbnail";

export const useFlexiThumbnailStyles = makeStyles(() => ({
  clickable: {
    cursor: "pointer",
    transition: ".5s all",
    "&:hover": {
      transform: "scale(1.03)",
    },
  },
  hoverContainer: {
    position: "relative",
  },
  hoverBackdrop: {
    position: "absolute",
    top: "0",
    left: 0,
    width: "100%",
    height: "100%",
    cursor: "pointer",
    transition: ".3s all",
    opacity: 0,
    userSelect: "none",
    "&:hover": {
      background: "rgba(0,0,0,.4)",
      opacity: 1,
    },
  },
  center: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  topRight: {
    display: "flex",
    justifyContent: "flex-end",
    paddingRight: "5px",
    paddingTop: "2px",
  },
  imagesContainer: {
    display: "flex",
    flexWrap: "wrap",
    width: ({ width, height }: FlexiThumbnailStyle) => width ?? height ?? 100,
    height: ({ width, height }: FlexiThumbnailStyle) => height ?? width ?? 100,
  },
  imageWrapper: {
    boxSizing: "border-box",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
  },
  halfWidth: {
    width: "50%",
  },
  halfHeight: {
    height: "50%",
  },
  fullWidth: {
    width: "100%",
  },
  fullSize: {
    width: "100%",
    height: "100%",
  },
  column: {
    flexDirection: "column",
  },
}));
