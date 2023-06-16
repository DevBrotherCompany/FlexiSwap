import cn from "classnames";
import { useFlexiLogoStyles } from "./FlexiLogo.styles";
interface FlexiLogoProps {
  className?: string;
}

const FlexiLogo: React.FC<FlexiLogoProps> = ({ className }) => {
  const classes = useFlexiLogoStyles();
  return <div className={cn(className, classes.logo)}>FlexiSwap</div>;
};

export default FlexiLogo;
