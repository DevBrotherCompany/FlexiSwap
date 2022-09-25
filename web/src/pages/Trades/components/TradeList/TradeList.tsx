import React from "react";
import { useTradeListStyles } from "./TradeList.style";

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
      {list.map((item) => (
        <TradeListItem
          key={item.id}
          item={item}
          onClick={onClick}
          onClickCollection={onClickCollection}
        />
      ))}
    </section>
  );
};
