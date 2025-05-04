import { TTransactionData } from 'types/walletData';

export type TSendVerificationRequestBody = {
  runnables: string[];
  passportData: TTransactionData;
};
