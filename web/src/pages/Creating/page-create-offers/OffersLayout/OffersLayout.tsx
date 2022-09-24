import React from "react";
import { useOfferLayoutStyles } from "./OffersLayout.style";

import { useNavigate } from "react-router-dom";

import { RouteName } from "shared/routes";
import { FlexiButton } from "components/FlexiButton/FlexiButton";

import { TradeOfferSidebar } from "pages/Creating/components/TradeOfferSidebar/TradeOfferSidebar";
import { useAppSelector } from "storage/hooks";

import { selectCreateOffer } from "../createOffer.slice";
import { Grid, List, ListItem } from "@mui/material";

interface OfferLayoutProps {}

export const OffersLayout: React.FC<OfferLayoutProps> = ({ children }) => {
  const classes = useOfferLayoutStyles();

  const { offers } = useAppSelector(selectCreateOffer);
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(RouteName.CreateTrade);
  };

  return (
    <main className={classes.container}>
      <TradeOfferSidebar>
        <Grid
          container
          direction={"column"}
          justifyContent={"space-between"}
          height={"100%"}
        >
          <List sx={{ minHeight: "200px" }}>
            {offers.map((o, i) => (
              <ListItem key={o.number}>
                <span>Offer #{i + 1}</span>
              </ListItem>
            ))}
          </List>

          <Grid
            container
            direction={"column"}
            height={100}
            justifyContent={"space-between"}
          >
            <FlexiButton>Create Trade</FlexiButton>
            <FlexiButton variant={"outlined"} onClick={handleBack}>
              Back
            </FlexiButton>
          </Grid>
        </Grid>
      </TradeOfferSidebar>
      {children}
    </main>
  );
};
