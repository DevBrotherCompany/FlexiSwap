"use client";
import React from "react";

import { Grid } from "@mui/material";
import { useTradeOfferStepperStyles } from "./TradeOfferStepper.style";

import { FlexiLink } from "@/components/FlexiLink/FlexiLink";

import { RouteName } from "@/shared/routes";
import { usePathname } from "next/navigation";

interface ILink {
  title: string;
  to: string;
}

export const TradeOfferStepper: React.FC = () => {
  const classes = useTradeOfferStepperStyles();
  const pathname = usePathname();

  const links: ILink[] = [
    {
      title: "Select NFTs to give",
      to: RouteName.CreateTrade,
    },
    {
      title: "Select NFTs for offers",
      to: `${RouteName.CreateOffers}`,
    },
  ];

  const isActive = (link: string) => pathname === link;

  const isDisabled = (index: number, links: ILink[]) => {
    const currentStep = links.findIndex(
      (l) => pathname.includes(l.to)
    );
    return index > currentStep;
  };

  return (
    <Grid container direction={"column"} className={classes.container}>
      {links.map(({ to, title }, index) => {
        const disabled = isDisabled(index, links);
        return (
          <FlexiLink
            key={title}
            href={disabled ? `${pathname}/#` : to}
            className={classes.link}
            withButtonBase={false}
            active={isActive(to)}
            disabled={disabled}
          >
            {title}
          </FlexiLink>
        );
      })}
    </Grid>
  );
};
