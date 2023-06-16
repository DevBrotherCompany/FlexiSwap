import { makeStyles } from "@mui/styles";

export const useYourSelectionListStyles = makeStyles(() => ({
  list: {
    display: "flex",
    flexWrap: "wrap",
  },
  listItem: {
    width: "fit-content !important",
    padding: "0 20px 20px 0 !important",
  },
  lastItem: {
    padding: "0 20px 0 0 !important",
  },
  img: {
    width: "100px",
    height: "100px",
  },
}));
