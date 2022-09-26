import { makeStyles } from "@mui/styles";
import { Theme } from "@mui/material/styles";

export const useTradeListStyles = makeStyles((theme: Theme) => ({
  list: { paddingTop: "60px" },
  card: { paddingLeft: "55px !important" },
  listItem: {
    display: "grid",
    gridTemplateColumns: "3fr 1fr 3fr",
    marginBottom: "20px !important",
  },
  accordion: {
    backgroundColor: `${theme.palette.background.paper} !important`,
    backgroundImage: "none !important",
    cursor: "default !important",
    padding: "10px 20px !important",
    // flexDirection: "column",
    "& .MuiAccordionSummary-content": {
      display: "block !important",
    },
  },
}));
