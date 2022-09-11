import { makeStyles } from "@mui/styles";

export const useFlexiCardStyles = makeStyles(() => ({
  card: {
    padding: "24px",
    "& .MuiCardContent-root": { padding: 0, paddingBottom: "0 !important" },
  },
}));
