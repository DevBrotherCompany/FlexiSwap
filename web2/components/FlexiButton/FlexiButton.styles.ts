export const useFlexiButtonStyles = () => ({
  btn: "w-[100%] px-[15px] py-[5px] uppercase font-medium text-sm leading-[1.75] rounded-[4px] flex justify-center align-center border-[1px] duration-300",
  slim: "!py-0",
  white: "!text-white !border-white",
  contained: {
    primary: `text-primaryContrast 
              bg-primaryMain border-primaryMain
              hover:bg-primaryHover hover:border-primaryHover
              active:bg-primaryActive active:border-primaryActive`,
    secondary: `text-secondaryContrast 
                bg-secondaryMain border-secondaryMain
                hover:bg-secondaryHover hover:border-secondaryHover
                active:bg-secondaryActive acrive:border-secondaryActive`,
  },
  outlined: {
    primary: "text-primaryMain hover:bg-primaryMain/[.1] border-primaryMain",
    secondary: "text-secondaryMain border-secondaryMain",
  },
  endIcon: "ml-[8px] -mr-[4px]",
  loader: "pt-[3px] box-border",
  disabled: "!bg-primaryDisabled !border-primaryDisabled hover:!bg-primaryDisabled hover:!border-primaryDisabled"
});
