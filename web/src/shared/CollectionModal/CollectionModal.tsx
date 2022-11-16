import React from "react";
import { useCollectionModalStyles } from "./CollectionModal.style";

import { FlexiModal, FlexiModalProps } from "components/FlexiModal/FlexiModal";

import { INftCollection } from "interfaces";

import { Title } from "./Text/Title";
import { ColName } from "./Text/ColName";
import { NftList } from "./NftList/NftList";

interface CollectionModalProps extends FlexiModalProps {
  collection: INftCollection | null;
}

export const CollectionModal: React.FC<CollectionModalProps> = ({
  collection,
  ...props
}) => {
  const classes = useCollectionModalStyles();

  if (!collection) {
    return null;
  }

  return (
    <FlexiModal {...props} cardClassName={classes.card}>
      <Title className={classes.title}>Collection name</Title>
      <ColName>{collection.name}</ColName>
      <NftList items={collection.previewItems ?? []} />
    </FlexiModal>
  );
};
