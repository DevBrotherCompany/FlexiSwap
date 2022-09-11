import { useMoralis } from "react-moralis";

export const useAuth = () => {
  const { user, isAuthenticated, authenticate, logout, account } = useMoralis();
  return { user, isAuthenticated, login: authenticate, logout, account };
};
