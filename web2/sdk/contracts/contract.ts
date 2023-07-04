import { WriteContractParameters } from "viem";
import { writeContract, waitForTransaction } from "@wagmi/core";

export class Contract {
  protected write = async (request: WriteContractParameters): Promise<void> => {
    const { hash } = await writeContract(request);
    await waitForTransaction({ hash });
  };
}
