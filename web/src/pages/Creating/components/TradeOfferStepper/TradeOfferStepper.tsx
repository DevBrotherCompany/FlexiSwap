import React from "react";

import { Grid } from "@mui/material";
import { useTradeOfferStepperStyles } from "./TradeOfferStepper.style";

import { FlexiLink } from "components/FlexiLink/FlexiLink";

import { RouteName } from "shared/routes";
import { useLocation } from "react-router-dom";

export const TradeOfferStepper: React.FC = () => {
  const classes = useTradeOfferStepperStyles();
  const { pathname } = useLocation();

  const isActive = (link: string) => pathname === link;

  const links = [
    {
      title: "Select NFTs to give",
      to: RouteName.CreateTrade,
    },
    {
      title: "Select NFTs for offers",
      to: RouteName.CreateOffers,
    },
  ];

  return (
    <Grid container direction={"column"} className={classes.container}>
      {links.map(({ to, title }) => (
        <FlexiLink
          className={classes.link}
          withButtonBase={false}
          active={isActive(to)}
          disabled={!isActive(to)}
        >
          {title}
        </FlexiLink>
      ))}
    </Grid>
  );
};
