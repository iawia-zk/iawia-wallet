import { TTransactionDataEncrypted } from 'screens/Data/Data.types';

export type TSendVerificationRequestBody = {
  runnables: string[];
  passportData: TTransactionDataEncrypted;
};
