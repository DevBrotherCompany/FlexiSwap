import { useMemo } from "react";
import { useAuth } from "./useAuth";
import { FlexiSwap } from "@/sdk/flexi-swap";
import { FlexiSwapAdapter } from "@/sdk/contracts/flexi-swap-adapter";
import { FLEXISWAP_ADDRESS } from "@/sdk/constants";
import { Approver } from "@/sdk/approver";
import { IFlexiSwap } from "@/sdk/IFlexiSwap";
import { FlexiSwapWithNotifications } from "@/sdk/flexi-swap-notifications";

const useFlexiSwap = (withNotifications = true) => {
  const { isConnected } = useAuth();
  const flexiSwapAddress: Address = useMemo(() => FLEXISWAP_ADDRESS, []);

  const flexiSwap = useMemo(() => {
    if (!isConnected) return null;

    const flexiSwapAdapter = new FlexiSwapAdapter(flexiSwapAddress);
    const approver = new Approver(flexiSwapAddress);
    let flexiSwap: IFlexiSwap = new FlexiSwap(flexiSwapAdapter, approver);
    if (withNotifications)
      flexiSwap = new FlexiSwapWithNotifications(flexiSwap);
    return flexiSwap;
  }, [isConnected, flexiSwapAddress, withNotifications]);

  return flexiSwap;
};

export default useFlexiSwap;
