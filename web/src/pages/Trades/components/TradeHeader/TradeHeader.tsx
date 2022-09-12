import React from "react";
import { Grid } from "@mui/material";
import { UserName } from "../Text/UserName";
import { WalletAddress } from "../Text/WalletAddress";

interface TradeHeaderProps {
  userName: string;
  address: string;
  tradeDate: string;
}

export const TradeHeader: React.FC<TradeHeaderProps> = ({
  tradeDate,
  userName,
  address,
}) => {
  return (
    <Grid container justifyContent={"space-between"}>
      <Grid item>
        <UserName>{userName}</UserName> <WalletAddress>{address}</WalletAddress>
      </Grid>
      <Grid item>{tradeDate}</Grid>
    </Grid>
  );
};
