import {
  writeContract,
  waitForTransaction,
  prepareWriteContract,
  PrepareWriteContractConfig,
} from "@wagmi/core";

export const write = async (config: PrepareWriteContractConfig) => {
  const { request } = await prepareWriteContract(config);
  const { hash } = await writeContract(request);
  await waitForTransaction({ hash });
};
