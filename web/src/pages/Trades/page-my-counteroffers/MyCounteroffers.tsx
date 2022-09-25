import React from "react";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";
import { TradesLayout } from "../components/TradesLayout/TradesLayout";

const MyCounteroffers: React.FC = () => {
  return (
    <TradesLayout>
      <FlexiTitle>My Counteroffers</FlexiTitle>
      <FlexiTitle>Coming soon</FlexiTitle>
    </TradesLayout>
  );
};

export default MyCounteroffers;
