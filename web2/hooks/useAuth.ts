"use client";
import { useEffect } from "react";

import { StorageKey } from "@/enums";
import { storage } from "@/packages/storage";
import { useAccount, useDisconnect } from "wagmi";

export const useAuth = () => {
  const { address, isConnected } = useAccount();
  const { disconnect } = useDisconnect();

  useEffect(() => {
    address && storage.save(StorageKey.AccountAddress, address);
  }, [address]);

  return {
    logout: disconnect,
    isConnected: isConnected,
    account: address,
  };
};
