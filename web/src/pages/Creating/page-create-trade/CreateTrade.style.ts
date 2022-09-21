import { makeStyles } from "@mui/styles";
import { Style } from "styles/variables";

export const useCreateTradeStyles = makeStyles(() => ({
  yourSelection: {
    borderRight: `1px solid ${Style.additionalBackground}`,
    // width: "50%",
    // height: "minmax(100vh, 'fit-content')",
  },
  title: {
    paddingTop: "34px",
  },
  chooseNft: {
    padding: "64px",
    width: "100%",
  },
}));
