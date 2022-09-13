import { makeStyles } from "@mui/styles";
import { Style } from "styles/variables";

export const useNftCollectionBlockStyles = makeStyles(() => ({
  block: {
    width: "100px",
    height: "100px",

    background: Style.additionalBackground,
    borderRadius: "6px",
    cursor: "pointer",
    transition: ".3s all",
    "&:hover": {
      transform: "scale(1.2)",
    },
  },
}));
