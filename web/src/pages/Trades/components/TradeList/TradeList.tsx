import React from "react";
import { useTradeListStyles } from "./TradeList.style";

import { INft, ITrade } from "interfaces";
import { FlexiCard } from "components/FlexiCard/FlexiCard";

import { TradeListItem } from "./TradeListItem";

interface TradeListProps {
  list: ITrade[];
  onClick?: (item: INft) => void;
}

export const TradeList: React.FC<TradeListProps> = ({ list, onClick }) => {
  const classes = useTradeListStyles();
  return (
    <section className={classes.list}>
      {list.map((item) => (
        <FlexiCard key={item.id} className={classes.card}>
          <TradeListItem item={item} onClick={onClick} />
        </FlexiCard>
      ))}
    </section>
  );
};
