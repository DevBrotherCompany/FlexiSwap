import { makeStyles } from "@mui/styles";
import MainLanding from "pages/Landing/assets/mainImage.svg";

export const useMainStyles = makeStyles(() => ({
  container: {
    width: "90vw",
    height: "70vh",
    background: `no-repeat url(${MainLanding})`,
    backgroundSize: "cover",
    margin: "40px auto",
    position: "relative",
  },
  text: {
    position: "absolute",
    top: "5%",
    left: "2%",
    color: "#FFF !important",
  },
  btnContainer: {
    position: "absolute",
    bottom: "5%",
    left: "45%",
    width: "fit-content",
  },
}));
