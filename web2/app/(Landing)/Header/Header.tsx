import { RainbowKitButton } from "@/components/RainbowKitButton/RainbowKitButton";
import Logo from "@/public/assets/images/flexiSwapLogo.svg";
import Image from "next/image";
import { useHeaderStyles } from "./Header.styles";

const Header: React.FC = () => {
  const classes = useHeaderStyles();
  return (
    <header className={classes.container}>
      <Image src={Logo} alt="logo" width={112} height={71} />
      <RainbowKitButton />
    </header>
  );
};

export default Header;
