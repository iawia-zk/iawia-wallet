import { ZKType } from 'enums/ZKType';

export type TDataItem = {
  dataType: ZKType;
  ipfsHash?: string;
  verified: boolean;
};
