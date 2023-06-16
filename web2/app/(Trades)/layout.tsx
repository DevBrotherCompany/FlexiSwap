import { FlexiButton } from "@/components/FlexiButton/FlexiButton";
import { FlexiSubtitle } from "@/components/FlexiSubtitle/FlexiSubtitle";
import Sidebar from "@/components/SideBar/SideBar";
import { RouteName } from "@/shared/routes";
import Link from "next/link";
import { SidebarList } from "./components/SidebarList/SidebarList";
import Toolbar from "./components/Toolbar/Toolbar";
import Content from "./components/Content/Content";
import { ConnectWallet } from "@/app/(Trades)/components/ConnectWallet/ConnectWallet";

interface TradesLayoutProps {
  onSearchChange?: (value: string) => void;
  onSearchPress?: (value: string) => void;
  children: React.ReactNode;
}

const useTradesLayoutStyles = () => ({
  subtitle: "!mt-[30px] !mb-0",
  mainContainer: "pl-[280px] pt-[23px]",
});

export default function TradesLayout({
  onSearchChange,
  onSearchPress,
  children,
}: TradesLayoutProps) {
  const classes = useTradesLayoutStyles();

  //   const { account } = useAuth();
  //   const [search, setSearch] = useState("");

  //   const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  //     onSearchChange && onSearchChange(e.target.value);
  //     setSearch(e.target.value);
  //   };

  //   const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
  //     if (e.key === "Enter") {
  //       onSearchPress && onSearchPress(search);
  //     }
  //   };

  return (
    <main>
      <Sidebar>
        <Link href={RouteName.CreateTrade}>
          <FlexiButton>Create trade</FlexiButton>
        </Link>
        <FlexiSubtitle className={classes.subtitle}>Marketplace</FlexiSubtitle>
        <SidebarList />
        <ConnectWallet />
      </Sidebar>
      <div className={classes.mainContainer}>        
        <Toolbar />
        <Content>{children}</Content>
      </div>
    </main>
  );
}
