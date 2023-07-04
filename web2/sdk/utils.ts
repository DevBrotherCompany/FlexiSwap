import { WriteContractParameters } from "viem";
import { writeContract, waitForTransaction } from "@wagmi/core";

export const write = async (request: WriteContractParameters): Promise<void> => {
  const { hash } = await writeContract(request);
  await waitForTransaction({ hash });
};
