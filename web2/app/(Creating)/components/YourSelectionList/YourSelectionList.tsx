import { useYourSelectionListStyles } from "./YourSelectionList.style";

import cn from "classnames";
import { List, ListItem } from "@mui/material";

import { INftItem, INullableItem } from "@/interfaces";
import { FlexiNft } from "@/components/FlexiNft/FlexiNft";
import FlexiNftCollection from "@/components/FlexiNftCollection/FlexiNftCollection";

export interface YourSelectionListProps {
  selected: INullableItem[];
  onClickNft?: (item: INftItem) => void;
  onCollectionClick?: (tokenAddress: Address) => void;
}

export const YourSelectionList: React.FC<YourSelectionListProps> = ({
  selected,
  onClickNft,
  onCollectionClick,
}) => {
  const classes = useYourSelectionListStyles();
  return (
    <List className={classes.list}>
      {selected.map((item, index) => (
        <ListItem
          key={index}
          className={cn(classes.listItem, { [classes.lastItem]: index > 7 })}
        >
          {item.tokenId ? (
            <FlexiNft
              item={item as INftItem}
              className={classes.img}
              onClickNft={onClickNft}
              clickable
              hoverEffect={"cross"}
            />
          ) : (
            <FlexiNftCollection
              tokenAddress={item.tokenAddress}
              onCollectionClick={onCollectionClick}
              clickable
              hoverEffect={"cross"}
            />
          )}
        </ListItem>
      ))}
    </List>
  );
};
