import { HDNodeWallet } from 'ethers';

export type TWalletContext = {
  walletState: TWalletState;
  walletDispatch: TWalletDispatch;
};

export type TWalletState = {
  wallet?: HDNodeWallet;
  balance?: string;
};

export type TWalletDispatch = {
  importWallet: (phrase: string) => void;
  sendInitialTransaction: (data: string) => void;
};
