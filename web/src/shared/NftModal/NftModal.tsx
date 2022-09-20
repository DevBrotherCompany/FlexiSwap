import React from "react";
import { useNftModalStyles } from "./NftModal.style";

import { Grid } from "@mui/material";

import { FlexiModal, FlexiModalProps } from "components/FlexiModal/FlexiModal";
import { INft } from "interfaces";

import { Image } from "shared/Image/Image";
import { Info } from "./Info/Info";

interface NftModalProps extends FlexiModalProps {
  item: INft | null;
}

export const NftModal: React.FC<NftModalProps> = ({ item, ...props }) => {
  const classes = useNftModalStyles();

  if (!item) {
    return null;
  }

  return (
    <FlexiModal {...props} cardClassName={classes.card}>
      <Grid container justifyContent={"space-around"}>
        <Grid item xs={6}>
          <Image src={item.img} alt={`${item.name} nft`} />
        </Grid>
        <Grid item xs={4}>
          <Info item={item} />
        </Grid>
      </Grid>
    </FlexiModal>
  );
};
