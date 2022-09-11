import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useNftListStyles = makeStyles((theme: Theme) => ({
  list: {
    display: "flex",
    alignItems: "center",
    paddingLeft: 0,
  },
  listItem: {
    listStyle: "none",
    marginRight: "40px",
  },
  imgWrapper: {
    width: "100px",
    height: "100px",
  },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "6px",
    objectFit: "cover",
  },
}));
