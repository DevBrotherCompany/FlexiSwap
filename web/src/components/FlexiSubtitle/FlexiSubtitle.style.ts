import { makeStyles } from "@mui/styles";
import { Style } from "styles/variables";

export const useSubtitleStyles = makeStyles(() => ({
  text: {
    fontWeight: "500 !important",
    fontSize: "14px !important",
    lineHeight: "17px !important",
    color: Style.additionalBackground,
  },
}));
