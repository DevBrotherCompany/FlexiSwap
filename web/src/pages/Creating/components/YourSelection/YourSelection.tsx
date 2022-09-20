import React from "react";
import { useYourSelectionStyles } from "./YourSelection.style";

import { useNavigate } from "react-router-dom";

import { INft } from "interfaces";
import { FlexiButton } from "components/FlexiButton/FlexiButton";
import { RouteName } from "shared/routes";

import { SectionTitle } from "../Text/SectionTitle";
import { YourSelectionList } from "../YourSelectionList/YourSelectionList";
import { Limit } from "../Text/Limit";

interface YourSelectionProps {
  selected: INft[];
}

export const YourSelection: React.FC<YourSelectionProps> = ({ selected }) => {
  const classes = useYourSelectionStyles();
  const navigate = useNavigate();

  const handleCreateOffers = () => {
    navigate(RouteName.CreateOffers);
  };

  const areNftsSelected = selected.length > 0;
  return (
    <main>
      <section className={classes.container}>
        <SectionTitle>Your selection</SectionTitle>
        <YourSelectionList selected={selected} />
      </section>
      {areNftsSelected && <Limit>{selected.length} of 10 NFTs selected</Limit>}
      <div className={classes.btnContainer}>
        <FlexiButton onClick={handleCreateOffers}>Create offers</FlexiButton>
      </div>
    </main>
  );
};
