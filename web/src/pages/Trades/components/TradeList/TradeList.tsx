import React from "react";
import { useTradeListStyles } from "./TradeList.style";

// import { INft, ITrade } from "interfaces";
import { INftCollection, INftItem, ITrade } from "interfaces";

import { TradeListItem } from "./TradeListItem";

interface TradeListProps {
  list: ITrade[];
  onClick?: (item: INftItem) => void;
  onClickCollection?: (item: INftCollection) => void;
}

export const TradeList: React.FC<TradeListProps> = ({
  list,
  onClick,
  onClickCollection,
}) => {
  const classes = useTradeListStyles();
  return (
    <section className={classes.list}>
      {/*<FlexiCard key={item.id} className={classes.card}>*/}
      {list.map((item) => (
        <TradeListItem
          key={item.id}
          item={item}
          onClick={onClick}
          onClickCollection={onClickCollection}
        />
      ))}
      {/*</FlexiCard>*/}
    </section>
  );
};
