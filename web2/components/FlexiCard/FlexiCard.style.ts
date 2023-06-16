import { makeStyles } from "@mui/styles";
import { Style } from "@/shared/variables";

export const useFlexiCardStyles = makeStyles(() => ({
  card: {
    padding: "24px",
    "& .MuiCardContent-root": { padding: 0, paddingBottom: "0 !important" },
    backgroundColor: `${Style.cardBackground} !important`,
    backgroundImage: "none !important",
    boxShadow: "10px 10px 10px rgba(0, 0, 0, 0.4)",
  },
}));
