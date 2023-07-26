import { mocked_collection } from "@/MOCK/items";
import {
  FlexiThumbnail,
  FlexiThumbnailProps,
} from "../FlexiThumbnail/FlexiThumbnail";

interface FlexiNftCollectionProps
  extends Omit<FlexiThumbnailProps, "items" | "onClick"> {
  tokenAddress: Address;
  onCollectionClick?: (tokenAddress: Address) => void;
}

const FlexiNftCollection: React.FC<FlexiNftCollectionProps> = ({
  tokenAddress,
  onCollectionClick,
  ...props
}) => {
  //get collection preview items
  return (
    <FlexiThumbnail
      items={mocked_collection.previewItems}
      onClick={() => onCollectionClick && onCollectionClick(tokenAddress)}
      {...props}
    />
  );
};

export default FlexiNftCollection;
