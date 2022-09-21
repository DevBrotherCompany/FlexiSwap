import React from "react";
import { useCollectionModalStyles } from "./CollectionModal.style";

import { FlexiModal, FlexiModalProps } from "components/FlexiModal/FlexiModal";

import { INft } from "interfaces";

import { Title } from "./Text/Title";
import { ColName } from "./Text/ColName";
import { NftList } from "./NftList/NftList";

interface CollectionModalProps extends FlexiModalProps {
  collection: INft[];
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  collection,
  ...props
}) => {
  const classes = useCollectionModalStyles();
  return (
    <FlexiModal {...props} cardClassName={classes.card}>
      <Title className={classes.title}>Collection name</Title>
      <ColName>Ape NFT</ColName>
      <NftList items={collection} />
    </FlexiModal>
  );
};
