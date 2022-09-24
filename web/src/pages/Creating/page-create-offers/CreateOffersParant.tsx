import React, { useEffect } from "react";
import { Outlet, useNavigate, useParams } from "react-router-dom";

import { RouteName } from "shared/routes";

export type CreateOffersParams = { number: string };

export const CreateOffersParant: React.FC = () => {
  const { number } = useParams<CreateOffersParams>();
  const navigate = useNavigate();

  useEffect(() => {
    !number && navigate(`${RouteName.CreateOffers}/1`);
  }, [number]);

  return <Outlet />;
};
