"use client";
import { makeStyles } from "@mui/styles";

import { Style } from "@/shared/variables";

import { FlexiButton } from "@/components/FlexiButton/FlexiButton";
import { RouteName } from "@/shared/routes";

import { TradeOfferSidebar } from "@/app/(Creating)/components/TradeOfferSidebar/TradeOfferSidebar";
import { selectCreateTrade } from "@/app/(Creating)/create-trade/createTrade.slice";

import { useAuth } from "@/hooks";
import { useAppSelector } from "@/storage/hooks";

import { StorageKey } from "@/enums";
import useFlexiSwap from "@/hooks/useFlexiSwap";
import { INftItem } from "@/interfaces";
import { storage } from "@/packages/storage";
import { Grid, List, ListItem } from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { selectCreateOffer } from "./createOffer.slice";
import { useClearStorage } from "./useClearStorage";

interface OfferLayoutProps {
  children: React.ReactNode;
}

const useOfferLayoutStyles = makeStyles(() => ({
  container: {
    paddingLeft: `330px`,
    display: "flex",
  },
  link: {
    fontWeight: 500,
    fontSize: "14px",
    lineHeight: "17px",
    color: Style.additionalPrimaryText,
    textDecoration: "none",
  },
}));

export default function OffersLayout({ children }: OfferLayoutProps) {
  const classes = useOfferLayoutStyles();

  const { offers } = useAppSelector(selectCreateOffer);
  const { selectedNFTs } = useAppSelector(selectCreateTrade);
  const { account } = useAuth();
  const router = useRouter();

  const { clearStrage } = useClearStorage();
  const flexiSwap = useFlexiSwap();
  
  const handleBack = () => {
    router.back();
  };

  const saveInStorage = (receivings: INftItem[][]) => {
    const fromLocalStorage = storage.get(StorageKey.NftTrades) ?? [];
    const toSave: any = {
      id: `${new Date().toISOString()}`,
      initiatorAddress: account,
      givings: {
        items: selectedNFTs,
      },
      receivings: receivings.map((rec, index) => ({
        id: `${index + 1}`,
        items: rec.map((rec2) => ({ item: rec2 })),
      })),
      createdAt: 0,
    };
    storage.save(StorageKey.NftTrades, [...fromLocalStorage, toSave]);
  };

  const handleCreateOffer = async () => {
    if (!flexiSwap) return;

    const receivings = offers.map((o) => o.selected);
    try {
      await flexiSwap.createTrade(selectedNFTs, receivings);
    } catch (e) {
      console.error("ERROR: ", e);
    } finally {
      clearStrage();
      router.push(RouteName.AllTrades);
    }
  };

  return (
    <>
      <TradeOfferSidebar>
        <Grid
          container
          direction={"column"}
          justifyContent={"space-between"}
          height={"100%"}
        >
          <List sx={{ minHeight: "200px" }}>
            {offers.map(({ id }) => (
              <ListItem key={id}>
                <Link
                  className={classes.link}
                  href={`${RouteName.CreateOffers}/${id}`}
                >
                  Offer #{id}
                </Link>
              </ListItem>
            ))}
          </List>

          <Grid
            container
            direction={"column"}
            height={100}
            justifyContent={"space-between"}
          >
            <FlexiButton onClick={handleCreateOffer}>Create Trade</FlexiButton>
            <FlexiButton variant={"outlined"} onClick={handleBack}>
              Back
            </FlexiButton>
          </Grid>
        </Grid>
      </TradeOfferSidebar>
      <main className={classes.container}>{children}</main>
    </>
  );
}
