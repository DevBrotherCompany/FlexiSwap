import { FlexiButton } from "@/components/FlexiButton/FlexiButton";
import { RouteName } from "@/shared/routes";
import Link from "next/link";

export const StartTradingButton = () => {
  return (
    <Link href={RouteName.AllTrades}>
      <FlexiButton
        variant="outlined"
        outlineColor="white"
      >
        Start Trading
      </FlexiButton>
    </Link>
  );
};
