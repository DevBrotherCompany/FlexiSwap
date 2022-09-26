import React from "react";
import { useMainStyles } from "./Main.style";

import { useNavigate } from "react-router-dom";

import { RouteName } from "shared/routes";
import { FlexiButton } from "components/FlexiButton/FlexiButton";
import { Title } from "../Text/Title";
import { Subtitle } from "../Text/Subtitle";

export const Main: React.FC = () => {
  const classes = useMainStyles();
  const navigate = useNavigate();

  const handleStartTrading = () => {
    navigate(RouteName.AllTrades);
  };

  return (
    <section className={classes.container}>
      <div className={classes.text}>
        <Title>
          Unlocking outstanding NFT Swapping opportunities for Web3 market
        </Title>
        <Subtitle>
          Implementation of the Swapping Tool with unique, flexible and demanded
          features for swapping NFTs and NFT collections.
        </Subtitle>
      </div>
      <div className={classes.btnContainer}>
        <FlexiButton
          onClick={handleStartTrading}
          outlineColor="white"
          variant="outlined"
        >
          Start Trading
        </FlexiButton>
      </div>
    </section>
  );
};
