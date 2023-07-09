import * as chains from 'wagmi/chains';

type Address = `0x${string}`;

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      NEXT_PUBLIC_CHAIN: keyof typeof chains;
      NEXT_PUBLIC_WALLECT_CONNECT_PROJECT_ID: string;
      NEXT_PUBLIC_API_URL: string;
    }
  }
}
