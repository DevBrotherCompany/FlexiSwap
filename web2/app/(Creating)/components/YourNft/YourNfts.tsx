"use client";
import { useAuth } from "@/hooks";
import { ChooseNfts, ChooseNftsProps } from "../ChooseNfts/ChooseNfts";

const YourNfts: React.FC<ChooseNftsProps> = (props) => {
  const { account } = useAuth();

  return (
    <>
      {account ? (
        <ChooseNfts {...props} />
      ) : (
        <h1 className="text-secondaryContrast">
          Please connect wallet to choose your NFTs
        </h1>
      )}
    </>
  );
};

export default YourNfts;
