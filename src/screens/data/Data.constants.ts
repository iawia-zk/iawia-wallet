import { DataType } from 'enums/DataType';
import { TDataItem } from './Data.types';

export const MOCK_DATA_ITEMS: TDataItem[] = [
  {
    dataType: DataType.BORN_DATE,
    verified: true,
  },
  {
    dataType: DataType.NATIONALITY,
    verified: true,
  },
  {
    dataType: DataType.GENDER,
    verified: false,
  },
  {
    dataType: DataType.PASSPORT_ID,
    verified: true,
  },
  {
    dataType: DataType.NATIONALITY_ID,
    verified: false,
  },
];
