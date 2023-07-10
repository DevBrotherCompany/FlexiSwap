"use client";

import { RouteName } from "@/shared/routes";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export default function OfferPage() {
  const router = useRouter();

  useEffect(() => {
    router.replace(`${RouteName.CreateOffers}/1`);
  }, [router]);
  return <></>;
}
