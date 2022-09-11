import React from "react";
import { useTradeListStyles } from "./TradeList.style";

import { ITrade } from "interfaces";
import { FlexiCard } from "components/FlexiCard/FlexiCard";

import { TradeListItem } from "./TradeListItem";

interface TradeListProps {
  list: ITrade[];
}

export const TradeList: React.FC<TradeListProps> = ({ list }) => {
  const classes = useTradeListStyles();
  return (
    <section className={classes.list}>
      {list.map((item) => (
        <FlexiCard key={item.id} className={classes.card}>
          <TradeListItem item={item} />
        </FlexiCard>
      ))}
    </section>
  );
};
