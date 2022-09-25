import React from "react";
import { useOfferLayoutStyles } from "./OffersLayout.style";

import { Link, useNavigate } from "react-router-dom";

import { RouteName } from "shared/routes";
import { FlexiButton } from "components/FlexiButton/FlexiButton";

import { TradeOfferSidebar } from "pages/Creating/components/TradeOfferSidebar/TradeOfferSidebar";
import { selectCreateTrade } from "pages/Creating/page-create-trade/createTrade.slice";

import { useAppSelector } from "storage/hooks";
import { FlexiSwap } from "sdk/flexi-swap";
import { useAuth } from "hooks";

import { selectCreateOffer } from "../createOffer.slice";
import { Grid, List, ListItem } from "@mui/material";
import { useClearStorage } from "../useClearStorage";

interface OfferLayoutProps {}

export const OffersLayout: React.FC<OfferLayoutProps> = ({ children }) => {
  const classes = useOfferLayoutStyles();

  const { offers } = useAppSelector(selectCreateOffer);
  const { selectedNFTs } = useAppSelector(selectCreateTrade);
  const { signer } = useAuth();
  const navigate = useNavigate();

  const { clearStrage } = useClearStorage();

  const handleBack = () => {
    navigate(-1);
  };

  const handleCreateOffer = async () => {
    if (signer) {
      const flexiSwap = new FlexiSwap(signer);
      const receivings = offers.map((o) => o.selected);
      try {
        await flexiSwap.createTrade(selectedNFTs, receivings);
      } catch (e) {
        console.error("ERROR: ", e);
      } finally {
        clearStrage();
        navigate(RouteName.AllTrades);
      }
    } else {
      // TODO make a way to login user (moralis issue)
    }
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
            {offers.map(({ id }) => (
              <ListItem key={id}>
                <Link
                  className={classes.link}
                  to={`${RouteName.CreateOffers}/${id}`}
                >
                  Offer #{id}
                </Link>
              </ListItem>
            ))}
          </List>

          <Grid
            container
            direction={"column"}
            height={100}
            justifyContent={"space-between"}
          >
            <FlexiButton onClick={handleCreateOffer}>Create Trade</FlexiButton>
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
