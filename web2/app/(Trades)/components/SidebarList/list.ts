import { RouteName } from "@/shared/routes";

interface ISidebarItem {
  title: string;
  link: string;
  needsAuthorization: boolean;
}

export const list: ISidebarItem[] = [
  {
    title: "All trades",
    link: RouteName.AllTrades,
    needsAuthorization: false
  },
  {
    title: "My trades",
    link: RouteName.MyTrades,
    needsAuthorization: true
  },
  {
    title: "My counteroffers",
    link: RouteName.MyCounterOffers,
    needsAuthorization: true
  },
];
