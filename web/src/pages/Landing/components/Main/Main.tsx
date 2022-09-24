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
        <Title>Trading based NFT Marketplace.</Title>
        <Subtitle>
          Platform that allows you to trade your NFTs for other NFTs.
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
