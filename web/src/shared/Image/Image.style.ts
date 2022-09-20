import { makeStyles } from "@mui/styles";

export const useImageStyles = makeStyles(() => ({
  imgWrapper: { margin: 0 },
  img: {
    width: "100%",
    height: "100%",
    borderRadius: "6px",
    objectFit: "cover",
  },
}));
