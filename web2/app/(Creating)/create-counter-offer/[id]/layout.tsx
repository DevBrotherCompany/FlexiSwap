import { FlexiLink } from "@/components/FlexiLink/FlexiLink";
import { CreatingSidebar } from "../../components/CreatingSidebar/CreatingSidebar";
import BackButton from "../../components/BackButton/BackButton";

const useCreateCounterOfferLayoutStyles = () => ({
  sidebarElement: "my-[20px]",
  content: "pl-[330px] flex",
});

const CreateCounterOfferLayout: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const classes = useCreateCounterOfferLayoutStyles();

  return (
    <>
      <CreatingSidebar subtitle={"Create counteroffer"}>
        <FlexiLink
          className={classes.sidebarElement}
          withButtonBase={false}
          active
        >
          Select NFTs to counteroffer
        </FlexiLink>
        <BackButton className={classes.sidebarElement} variant="outlined">
          Back
        </BackButton>
      </CreatingSidebar>
      <div className={classes.content}>{children}</div>
    </>
  );
};

export default CreateCounterOfferLayout;
