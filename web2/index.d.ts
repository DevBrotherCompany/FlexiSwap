import * as chains from 'wagmi/chains';

declare global {
  type Address = `0x${string}`;
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CHAIN: keyof typeof chains;
      NEXT_PUBLIC_WALLECT_CONNECT_PROJECT_ID: string;
      NEXT_PUBLIC_API_URL: string;
    }
  }
}
