import { useEffect } from 'react'
import { useMoralis } from 'react-moralis'

import { StorageKey } from 'enums'
import { storage } from 'packages/storage'

export const useAuth = () => {
  const { user, authenticate, logout, account, web3 } = useMoralis()
  const savedAddress = storage.get(StorageKey.AccountAddress)
  const signer = (account || savedAddress) && web3 ? web3.getSigner(account ?? savedAddress) : null

  useEffect(() => {
    account && storage.save(StorageKey.AccountAddress, account)
  }, [account])

  return {
    user,
    login: authenticate,
    logout,
    account: account ?? savedAddress,
    signer,
    moralisAccount: account,
  }
}
