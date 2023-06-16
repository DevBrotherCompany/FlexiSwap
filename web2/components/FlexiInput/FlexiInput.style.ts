export const useFlexiInputStyles = () => ({
  input: `!py-[10px] !px-[20px] !outline-none 
          !rounded-[4px] !border-[1px] border-white/[.3] 
          caret-white text-secondaryContrast
          hover:border-white
          focus:border-primaryMain focus:!box-border`,
  filled: "!bg-bgPaper",
  outlined: "!bg-transparent",
  error: `!border-[2px] !border-errorInput focus:!border-errorInput hover:!border-errorInput`,
  disabled: "hover:!border-white/[.3]",
  fullWidth: "w-[100%]",
});
