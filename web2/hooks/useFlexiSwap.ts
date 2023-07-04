import { useMemo } from "react";
import { useAuth } from "./useAuth";
import { FlexiSwap } from "@/sdk/flexi-swap";
import { FlexiSwapContract } from "@/sdk/contracts/flexi-swap-contract";
import { FLEXISWAP_ADDRESS } from "@/sdk/constants";
import { Approver } from "@/sdk/approver";

const useFlexiSwap = () => {
  const { isConnected } = useAuth();
  const flexiSwapAddress: Address = useMemo(() => FLEXISWAP_ADDRESS, []);

  const flexiSwap = useMemo(
    () =>
      isConnected
        ? new FlexiSwap(
            new FlexiSwapContract(flexiSwapAddress),
            new Approver(flexiSwapAddress)
          )
        : null,
    [isConnected, flexiSwapAddress]
  );

  return flexiSwap;
};

export default useFlexiSwap
