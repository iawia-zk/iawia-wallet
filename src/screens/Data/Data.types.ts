import { ZKType } from 'enums/ZKType';

export type TDataItem = {
  dataType: ZKType;
  ipfsHash?: string;
  verified: boolean;
};

export type TTransactionDataEncrypted = {
  dateOfBirth: TEncrypted;
  dateOfExpiry: TEncrypted;
  documentNumber: TEncrypted;
  issuingCountry: TEncrypted;
  nationality: TEncrypted;
};

export type TEncrypted = {
  cipher: string;
  iv: string;
};
