import { useMoralis } from "react-moralis";

export const useAuth = () => {
  const { user, isAuthenticated, authenticate, logout } = useMoralis();
  return { user, isAuthenticated, login: authenticate, logout };
};
