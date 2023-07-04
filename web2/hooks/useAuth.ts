"use client";
import { useEffect } from "react";

import { StorageKey } from "@/enums";
import { storage } from "@/packages/storage";
import { useAccount, useDisconnect, useWalletClient } from "wagmi";

export const useAuth = () => {
  const { address, isConnected } = useAccount();
  const { data: walletClient } = useWalletClient();
  const { disconnect } = useDisconnect();
  const signer = walletClient;

  useEffect(() => {
    address && storage.save(StorageKey.AccountAddress, address);
  }, [address]);

  return {
    logout: disconnect,
    isConnected: isConnected,
    signer,
    account: address,
  };
};
