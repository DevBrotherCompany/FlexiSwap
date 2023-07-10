"use client";
import { RouteName } from "@/shared/routes";
import Link from "next/link";
import React from "react";
import { useAuth } from "@/hooks";
import { FlexiButton } from "@/components/FlexiButton/FlexiButton";

const CreateTradeLink = () => {
  const { isConnected } = useAuth();
  return (
    <Link href={RouteName.CreateTrade}>
      <FlexiButton disabled={!isConnected}>Create trade</FlexiButton>
    </Link>
  );
};

export default CreateTradeLink;
