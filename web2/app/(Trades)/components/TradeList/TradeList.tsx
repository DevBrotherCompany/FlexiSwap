import React from "react";
import { useTradeListStyles } from "./TradeList.style";

import { INftCollection, INftItem, ITrade } from "@/interfaces";

import { TradeListItem, TradeListItemProps } from "./TradeListItem";

interface TradeListProps extends Pick<TradeListItemProps, "variant"> {
  list: ITrade[];
  onClick?: (item: INftItem) => void;
  onClickCollection?: (item: INftCollection) => void;
}

export const TradeList: React.FC<TradeListProps> = ({
  list,
  onClick,
  onClickCollection,
  variant,
}) => {
  const classes = useTradeListStyles();
  return (
    <section className={classes.list}>
      {list.map((item) => (
        <TradeListItem
          key={item.id.toString()}
          item={item}
          onClick={onClick}
          onClickCollection={onClickCollection}
          variant={variant}
        />
      ))}
    </section>
  );
};
