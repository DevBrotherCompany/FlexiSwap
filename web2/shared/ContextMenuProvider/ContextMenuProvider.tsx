import { useEffect } from "react";
import "react-contexify/dist/ReactContexify.css";

type ContextMenuProviderProps = {
  theme: "light" | "dark";
  children: React.ReactNode;
};

const ContextMenuProvider: React.FC<ContextMenuProviderProps> = ({
  theme,
  children,
}) => {
  useEffect(() => {
    import(`./${theme}-theme.css`);
  }, [theme]);

  return <>{children}</>;
};

export default ContextMenuProvider;
