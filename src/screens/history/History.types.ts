import { ZKType } from 'enums/ZKType';

export type TCompany = {
  id: string;
  name: string;
  logoUrl: string;
  link: string;
};

export type TZKItem = {
  zkType: ZKType;
  verified: boolean;
  createdAt: string;
};

export type TCompanyZKItem = {
  company: TCompany;
  zkList: TZKItem[];
};
