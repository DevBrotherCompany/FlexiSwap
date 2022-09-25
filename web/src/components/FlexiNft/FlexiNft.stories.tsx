/* eslint-disable */
import { FlexiNft } from "./FlexiNft";

export default {
  title: "FlexiNft",
};

export const Default = () => (
  <FlexiNft
    item={{
      tokenId: "1",
      name: "",
      file: "",
      collection: null,
      tokenAddress: "",
    }}
  />
);

Default.story = {
  name: "default",
};
