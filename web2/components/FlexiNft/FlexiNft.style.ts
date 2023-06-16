import { makeStyles } from "@mui/styles";
import { FlexiNftStyle } from "./FlexiNft";

export const useFlexiNftStyles = makeStyles(() => ({
  img: {
    width: ({ width, height }: FlexiNftStyle) => width ?? height ?? 100,
    height: ({ width, height }: FlexiNftStyle) => height ?? width ?? 100,
  },
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
}));
