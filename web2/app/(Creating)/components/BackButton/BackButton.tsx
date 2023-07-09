"use client";
import {
  FlexiButton,
  FlexiButtonProps,
} from "@/components/FlexiButton/FlexiButton";
import { useRouter } from "next/navigation";

const BackButton: React.FC<FlexiButtonProps> = ({ children, ...props }) => {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <FlexiButton onClick={handleClick} {...props}>
      {children}
    </FlexiButton>
  );
};

export default BackButton;
