import React from "react";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

import { OffersLayout } from "./OffersLayout/OffersLayout";

const CreateOffers: React.FC = () => {
  return (
    <OffersLayout>
      <FlexiTitle>Select NFTs for offer</FlexiTitle>
    </OffersLayout>
  );
};

export default CreateOffers;
