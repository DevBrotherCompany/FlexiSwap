import { RouteName } from "../../routes";

interface ISidebarItem {
  title: string;
  link: string;
}

export const list: ISidebarItem[] = [
  {
    title: "All trades",
    link: RouteName.AllTrades,
  },
  {
    title: "My trades",
    link: RouteName.MyTrades,
  },
  {
    title: "My counteroffers",
    link: RouteName.MyCounterOffers,
  },
];
