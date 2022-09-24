import { useMoralis } from 'react-moralis';

export const useAuth = () => {
  const { user, authenticate, logout, account, web3 } = useMoralis();
  const signer = account && web3 ? web3.getSigner(account) : null;
  return { user, login: authenticate, logout, account, signer };
};
