import React from "react";
import { useHiddenDetailsStyles } from "./HiddenDetails.style";

import { INftItem } from "interfaces";

interface HiddenDetailsProps {
  givingItems: INftItem[];
}

export const HiddenDetails: React.VFC<HiddenDetailsProps> = ({
  givingItems,
}) => {
  const classes = useHiddenDetailsStyles();
  return (
    <>
      a{/*<Grid className={classes.listItem}>*/}
      {/*  <Grid item>*/}
      {/*    <NftList*/}
      {/*      list={givingItems ?? []}*/}
      {/*      onClick={onClick}*/}
      {/*      isExpanded={false}*/}
      {/*    />*/}
      {/*  </Grid>*/}
      {/*  <Grid*/}
      {/*    container*/}
      {/*    justifyContent={"center"}*/}
      {/*    alignItems={"center"}*/}
      {/*    paddingBottom={"5%"}*/}
      {/*  >*/}
      {/*    {ArrowSvg}*/}
      {/*  </Grid>*/}
      {/*  <Grid item>*/}
      {/*    {!isPreviewCollection ? (*/}
      {/*      <NftList list={previewReceivingItems} onClick={onClick} />*/}
      {/*    ) : (*/}
      {/*      <NftCollectionBlock*/}
      {/*        collection={previewReceivingCollection}*/}
      {/*        onClick={onClickCollection}*/}
      {/*      />*/}
      {/*    )}*/}
      {/*    {isManyReceivings && (*/}
      {/*      <p>*/}
      {/*        {receivingCount} more offer*/}
      {/*        {receivingCount > 2 ? "s" : ""}*/}
      {/*        ...*/}
      {/*      </p>*/}
      {/*    )}*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
      {/*<Grid container>*/}
      {/*  <Grid item xs={2}>*/}
      {/*    <FlexiButton*/}
      {/*      onClick={toggleExpand}*/}
      {/*      variant={!expanded ? "contained" : "outlined"}*/}
      {/*    >*/}
      {/*      {!expanded ? "Details" : "Hide details"}*/}
      {/*    </FlexiButton>*/}
      {/*  </Grid>*/}
      {/*</Grid>*/}
    </>
  );
};
