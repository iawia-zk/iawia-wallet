/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ETH_MAINNET_KEY: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
