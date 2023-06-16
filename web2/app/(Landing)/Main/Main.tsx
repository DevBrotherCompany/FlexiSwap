import { Title } from "../Text/Title";
import { Subtitle } from "../Text/Subtitle";
import { StartTradingButton } from "./StartTradingButton/StartTradingButton";
import { useMainStyles } from "./Main.styles";

const Main: React.FC = () => {
  const classes = useMainStyles();
  return (
    <section className={classes.container}>
      <div className={classes.text}>
        <Title>
          Unlocking outstanding NFT Swapping opportunities for Web3 market
        </Title>
        <Subtitle>
          Implementation of the Swapping Tool with unique, flexible and demanded
          features for swapping NFTs and NFT collections.
        </Subtitle>
      </div>
      <div className={classes.btnContainer}>
        <StartTradingButton />
      </div>
    </section>
  );
};

export default Main;
