import { useMemo } from "react";
import { useAuth } from "./useAuth";
import { FlexiSwap } from "@/sdk/flexi-swap";
import { FlexiSwapAdapter } from "@/sdk/contracts/flexi-swap-adapter";
import { FLEXISWAP_ADDRESS } from "@/sdk/constants";
import { Approver } from "@/sdk/approver";

const useFlexiSwap = () => {
  const { isConnected } = useAuth();
  const flexiSwapAddress: Address = useMemo(() => FLEXISWAP_ADDRESS, []);

  const flexiSwap = useMemo(() => {
    if (!isConnected) return null;

    const flexiSwapAdapter = new FlexiSwapAdapter(flexiSwapAddress);
    const approver = new Approver(flexiSwapAddress);
    return new FlexiSwap(flexiSwapAdapter, approver);
  }, [isConnected, flexiSwapAddress]);

  return flexiSwap;
};

export default useFlexiSwap;
