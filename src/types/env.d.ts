declare module 'env' {
  export interface Env {
    SEPOLIA_KEY: string;
    ETH_MAINNET_KEY: string;
  }
  export const env: Env;
}
