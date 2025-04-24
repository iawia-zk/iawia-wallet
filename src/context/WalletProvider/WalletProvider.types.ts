import { HDNodeWallet } from 'ethers';
import { TWalletData } from 'types/walletData';

export type TWalletContext = {
  walletState: TWalletState;
  walletDispatch: TWalletDispatch;
};

export type TWalletState = {
  wallet?: HDNodeWallet;
  balance?: string;
  walletData?: TWalletData;
};

export type TWalletDispatch = {
  importWallet: (phrase: string) => void;
  sendInitialTransaction: (data: string) => void;
  setWalletData: (data: TWalletData) => void;
  getBalance: () => Promise<void>;
};
