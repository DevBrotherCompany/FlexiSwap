import { makeStyles } from "@mui/styles";

export const useChooseNftListStyles = makeStyles(() => ({
  list: {
    display: "flex",
    flexWrap: "wrap",
  },
  listItem: {
    width: "fit-content !important",
    padding: "0 25px 25px 0 !important",
    // paddingLeft: "0 !important",
    // paddingRight: "0 !important",
  },
}));
