import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useTradeListStyles = makeStyles((theme: Theme) => ({
  list: { paddingTop: "60px" },
  card: { paddingLeft: "55px !important" },
  listItem: {
    display: "grid",
    gridTemplateColumns: "minmax(540px, 4fr) 1fr 4fr",
    marginBottom: "20px !important",
  },
  accordion: {
    backgroundColor: `${theme.palette.background.paper} !important`,
    backgroundImage: "none !important",
    cursor: "default !important",
    padding: "10px 20px !important",
    marginBottom: "50px !important",

    // flexDirection: "column",
    "& .MuiAccordionSummary-content": {
      display: "block !important",
    },
  },
  accordionSumary: {
    backgroundColor: `${theme.palette.background.paper} !important`,
    backgroundImage: "none !important",
    cursor: "default !important",
    display: "block !important",
    marginBottom: "0 !important",
  },
  givings: {},
}));
