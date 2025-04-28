import { HDNodeWallet } from 'ethers';
import { TTransactionData } from 'types/walletData';
import { TTokenBalance } from 'helpers/walletService/walletService.types';

export type TWalletContext = {
  walletState: TWalletState;
  walletDispatch: TWalletDispatch;
};

export type TWalletState = {
  wallet?: HDNodeWallet;
  balance?: string;
  transactionData?: TTransactionData;
  tokens?: TTokenBalance[];
};

export type TWalletDispatch = {
  importWallet: (phrase: string) => void;
  sendInitialTransaction: (data: string) => void;
  setTransactionData: (data: TTransactionData) => void;
  getBalance: () => Promise<void>;
  getTokens: () => Promise<void>;
};
