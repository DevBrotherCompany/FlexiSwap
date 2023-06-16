"use client";

import { RouteName } from "@/shared/routes";
import { useRouter } from "next/navigation";

export default function OfferPage() {
  const router = useRouter();

  return router.replace(`${RouteName.CreateOffers}/1`);
}
