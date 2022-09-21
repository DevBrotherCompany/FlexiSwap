import { makeStyles } from "@mui/styles";

export const useNftListStyles = makeStyles(() => ({
  list: {
    paddingTop: "50px !important",
    display: "flex !important",
    flexWrap: "wrap",
  },
  listItem: {
    width: "fit-content !important",
    paddingLeft: "0 !important",
    paddingRight: "30px !important",
  },
}));
