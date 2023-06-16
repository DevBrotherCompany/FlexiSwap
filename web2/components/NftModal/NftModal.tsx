import React from "react";
import { useNftModalStyles } from "./NftModal.style";

import { Grid } from "@mui/material";

import { FlexiModal, FlexiModalProps } from "@/components/FlexiModal/FlexiModal";

import { INftItem } from "@/interfaces/nft.interface";

import { Image } from "@/components/Image/Image";
import { Info } from "./Info/Info";

interface NftModalProps extends FlexiModalProps {
  item: INftItem | null;
}

export const NftModal: React.FC<NftModalProps> = ({ item, ...props }) => {
  const classes = useNftModalStyles();

  if (!item) {
    return null;
  }

  return (
    <FlexiModal {...props} maxWidth={"xl"} cardClassName={classes.card}>
      <Grid container justifyContent={"space-around"}>
        <Grid item xs={4}>
          <Image
            src={item.file ?? ""}
            alt={`${item.name} nft`}
            className={classes.img}
          />
        </Grid>
        <Grid item xs={6}>
          <Info item={item} />
        </Grid>
      </Grid>
    </FlexiModal>
  );
};
