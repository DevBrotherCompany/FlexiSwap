import React from "react";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";

import { OfferLayout } from "./OfferLayout/OfferLayout";

const CreateOffers: React.FC = () => {
  return (
    <OfferLayout>
      <FlexiTitle>Select NFTs for offer</FlexiTitle>
    </OfferLayout>
  );
};

export default CreateOffers;
