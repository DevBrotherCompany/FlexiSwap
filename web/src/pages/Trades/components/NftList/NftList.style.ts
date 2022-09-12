import { makeStyles } from "@mui/styles";

export const useNftListStyles = makeStyles(() => ({
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
