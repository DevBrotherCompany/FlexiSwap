/* eslint-disable */
import { FlexiNft } from "./FlexiNft";

export default {
  title: "FlexiNft",
};

export const Default = () => (
  <FlexiNft
    item={{
      id: 1,
      name: "",
      img: "",
      collection: "",
      address: "",
    }}
  />
);

Default.story = {
  name: "default",
};
