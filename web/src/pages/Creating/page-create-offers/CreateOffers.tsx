import React, { useEffect } from "react";
import { useCreateOffersStyles } from "./CreateOffers.style";

import { useNavigate, useParams } from "react-router-dom";

import { RouteName } from "shared/routes";

import { FlexiTitle } from "components/FlexiTitle/FlexiTitle";
import { FlexiInput } from "components/FlexiInput/FlexiInput";
import { useAppSelector } from "storage/hooks";

import { YourSelection } from "../components/YourSelection/YourSelection";
import { ChooseNfts } from "../components/ChooseNfts/ChooseNfts";

import { allNfts } from "MOCK";

import { OffersLayout } from "./OffersLayout/OffersLayout";
import { CreateOffersParams } from "./CreateOffersParant";
import { selectCreateOffer } from "./createOffer.slice";

const CreateOffers: React.FC = () => {
  const classes = useCreateOffersStyles();
  const { number } = useParams<CreateOffersParams>();
  const navigate = useNavigate();
  const {} = useAppSelector(selectCreateOffer);

  useEffect(() => {
    !number && navigate(`${RouteName.CreateOffers}/1`);
  }, [number]);

  return (
    <OffersLayout>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs for offer</FlexiTitle>
        <YourSelection
          selected={[]}
          // onClickNft={handleRemoveNft}
          // onBtnClick={handleCreateOffers}
          labelBtn={"Add offer"}
        />
      </main>
      <main className={classes.chooseNft}>
        <FlexiInput placeholder={"Search by NFTs, collection name..."} />
        <ChooseNfts
          nfts={allNfts}
          title={"All NFTs"}
          // onClickNft={handleSelectNft}
          // filterFrom={selectedNFTs}
        />
      </main>
    </OffersLayout>
  );
};

export default CreateOffers;
