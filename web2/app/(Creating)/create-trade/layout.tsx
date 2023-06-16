import { FlexiButton } from "@/components/FlexiButton/FlexiButton";
import { TradeOfferSidebar } from "../components/TradeOfferSidebar/TradeOfferSidebar";
import Link from "next/link";
import { RouteName } from "@/shared/routes";

const useTradeLayoutStyles = () => ({
  container: "flex",
  btn: "!mt-[50px]",
  content: "pl-[330px] w-[100%] flex",
});

export default function TradeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const classes = useTradeLayoutStyles();
  return (
    <main className={classes.container}>
      <TradeOfferSidebar>
        <Link href={RouteName.AllTrades}>
          <FlexiButton variant={"outlined"} className={classes.btn}>
            Back
          </FlexiButton>
        </Link>
      </TradeOfferSidebar>
      <div className={classes.content}>{children}</div>
    </main>
  );
}
