"use client";
import React, { useEffect } from "react";
import { Style } from "@/shared/variables";
import { makeStyles } from "@mui/styles";

import { FlexiInput } from "@/components/FlexiInput/FlexiInput";
import { FlexiTitle } from "@/components/FlexiTitle/FlexiTitle";
import { RouteName } from "@/shared/routes";

import { INftItem } from "@/interfaces";
import { useSearchItemsLazyQuery } from "@/packages/graphql/generated";
import { useAppDispatch, useAppSelector } from "@/storage/hooks";

import { ChooseNfts } from "../../components/ChooseNfts/ChooseNfts";
import { YourSelection } from "../../components/YourSelection/YourSelection";

import {
  addNftForOffer,
  removeNftFromOffer,
  selectCreateOffer,
} from "./createOffer.slice";
import { useParams, useRouter } from "next/navigation";
import { mocked_Nfts } from "@/MOCK/creating";

const useCreateOffersStyles = makeStyles(() => ({
  yourSelection: {
    borderRight: `1px solid ${Style.additionalBackground}`,
    paddingBottom: "60px",
  },
  title: {
    paddingTop: "34px",
  },
  chooseNft: {
    padding: "64px",
    width: "100%",
  },
}));

const CreateOffers: React.FC = () => {
  const classes = useCreateOffersStyles();

  const [getNfts, { data }] = useSearchItemsLazyQuery();
  console.log("===data===", data);

  const router = useRouter();
  const { id } = useParams();
  const { offers } = useAppSelector(selectCreateOffer);
  const dispatch = useAppDispatch();

  // const [search, setSearch] = useState('')
  // const debouncedSearch = useDebounce(search)

  const currentOffer = offers.find((o) => o.id === Number(id));

  const handleAddNftToOffer = (item: INftItem) => {
    dispatch(
      addNftForOffer({
        item,
        id: Number(id),
      })
    );
  };

  const handleRemoveNft = (item: INftItem) => {
    dispatch(removeNftFromOffer({ id: Number(id), item }));
  };

  const handleAddOffer = () => {
    router.push(RouteName.CreateOffers + "/" + (Number(id) + 1));
  };

  const handleSearchPressed = (e: any) => {
    if (e.key === "Enter") {
      getNfts({ variables: { search: e.target.value, nextPage: 1 } });
      // onSearchPress && onSearchPress(search)
    }
  };

  useEffect(() => {
    getNfts({ variables: { search: "", nextPage: 1 } });
  }, []);

  // console.log('===SearchItems -> data===', data)
  // useEffect(() => {
  // TODO validate current page
  // const id = Number(number);
  // if (currentOffer && currentOffer.id > id + 1) {
  //   navigate(RouteName.CreateOffers + `/${id + 1}`);
  // } else if (id > 1 && offers.length < id) {
  //   navigate(RouteName.CreateOffers + `/${1}`);
  // }
  // }, [id]);

  return (
    <>
      <main className={classes.yourSelection}>
        <FlexiTitle className={classes.title}>Select NFTs for offer</FlexiTitle>
        <YourSelection
          selected={currentOffer?.selected ?? []}
          onClickNft={handleRemoveNft}
          onBtnClick={handleAddOffer}
          labelBtn={"Add offer"}
          // disabledBtn={offers.length > 6}
        />
      </main>
      <main className={classes.chooseNft}>
        <FlexiInput
          onKeyDown={handleSearchPressed}
          placeholder={
            "Search by NFTs, collection name (Press enter to search)..."
          }
        />
        <ChooseNfts
          nfts={mocked_Nfts}
          title={"All NFTs"}
          onClickNft={handleAddNftToOffer}
          filterFrom={currentOffer?.selected}
        />
      </main>
    </>
  );
};

export default CreateOffers;
