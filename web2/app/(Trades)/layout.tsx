import { ConnectWallet } from "@/app/(Trades)/components/ConnectWallet/ConnectWallet";
import { FlexiButton } from "@/components/FlexiButton/FlexiButton";
import { FlexiSubtitle } from "@/components/FlexiSubtitle/FlexiSubtitle";
import Sidebar from "@/components/SideBar/SideBar";
import { RouteName } from "@/shared/routes";
import Link from "next/link";
import Content from "./components/Content/Content";
import { SidebarList } from "./components/SidebarList/SidebarList";
import CreateTradeLink from "./components/CreateTradeLink/CreateTradeLink";

interface TradesLayoutProps {
  children: React.ReactNode;
}

const useTradesLayoutStyles = () => ({
  subtitle: "!mt-[30px] !mb-0",
  mainContainer: "pl-[280px] pt-[23px]",
});

export default function TradesLayout({ children }: TradesLayoutProps) {
  const classes = useTradesLayoutStyles();

  return (
    <main>
      <Sidebar>
        <CreateTradeLink />
        <FlexiSubtitle className={classes.subtitle}>Marketplace</FlexiSubtitle>
        <SidebarList />
        <ConnectWallet />
      </Sidebar>
      <div className={classes.mainContainer}>
        <Content>{children}</Content>
      </div>
    </main>
  );
}
