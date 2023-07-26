import React from "react";
import { useChooseNftListStyles } from "./ChooseNftList.style";

import { List, ListItem } from "@mui/material";

import { INftItem } from "@/interfaces";

import { FlexiNft } from "@/components/FlexiNft/FlexiNft";
import { useContextMenu } from "react-contexify";
import FlexiContextMenu from "@/components/FlexiContextMenu/FlexiContextMenu";
import FlexiNftCollection from "@/components/FlexiNftCollection/FlexiNftCollection";

interface ChooseNftListProps {
  nfts: INftItem[];
  onClickNft?: (item: INftItem) => void;
  onAnyOfCollectionClick?: (tokenAddress: Address) => void;
}

export const ChooseNftList: React.FC<ChooseNftListProps> = ({
  nfts,
  onClickNft,
  onAnyOfCollectionClick,
}) => {
  const classes = useChooseNftListStyles();
  const { show } = useContextMenu();
  const isShowAnyOfCollection = Boolean(onAnyOfCollectionClick);
  return (
    <List className={classes.list}>
      <ListItem
        key={""}
        className={classes.listItem}
        onContextMenu={(event: React.MouseEvent<HTMLElement>) =>
          isShowAnyOfCollection && show({ event, id: "1231231" })
        }
      >
        <FlexiNftCollection tokenAddress="0x0" hoverEffect="tick" clickable />
      </ListItem>
      {nfts.map((nft) => {
        const id = `${nft.tokenId.toString()}:${nft.tokenAddress}:${nft.name}`;
        return (
          <>
            <ListItem
              key={id}
              className={classes.listItem}
              onContextMenu={(event: React.MouseEvent<HTMLElement>) =>
                isShowAnyOfCollection && show({ event, id })
              }
            >
              <FlexiNft
                item={nft}
                clickable
                onClickNft={onClickNft}
                hoverEffect={"tick"}
              />
            </ListItem>
            <FlexiContextMenu
              menuItems={[
                {
                  label: "Chose single nft",
                  onClick: () => {
                    onClickNft && onClickNft(nft);
                  },
                },
                {
                  label: "Chose any of collection",
                  onClick: () => {
                    onAnyOfCollectionClick &&
                      onAnyOfCollectionClick(nft.tokenAddress);
                  },
                },
              ]}
              id={id}
            />
          </>
        );
      })}
    </List>
  );
};
