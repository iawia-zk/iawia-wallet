import { ASYNC_NOOP, NOOP } from 'constants/noop';
import { TWalletDispatch, TWalletState } from './WalletProvider.types';

export const INITIAL_STATE: TWalletState = {
  wallet: undefined,
  balance: undefined,
  transactionData: undefined,
  tokens: undefined,
};

export const INITIAL_DISPATCH: TWalletDispatch = {
  importWallet: NOOP,
  sendInitialTransaction: NOOP,
  setTransactionData: NOOP,
  getBalance: ASYNC_NOOP,
  getTokens: ASYNC_NOOP,
};
