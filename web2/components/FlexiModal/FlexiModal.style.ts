import { makeStyles } from "@mui/styles";

export const useFlexiModalStyles = makeStyles(() => ({
  cross: {
    position: "absolute",
    top: "5px",
    right: "15px",
    background: "none",
    border: "none",

    color: "#ADACAC",
    fontWeight: 600,
    fontSize: "30px",

    cursor: "pointer",
    transform: "rotate(45deg)",

    padding: 0,
  },
}));
