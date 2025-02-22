import { STORAGE_KEYS } from './storage.constants';

export type TStorageKeys = STORAGE_KEYS;

export type TStorage = {
  readStorage: (key: TStorageKeys) => string | null;
  writeStorage: (key: TStorageKeys, data: string) => void;
  removeStorage: (key: TStorageKeys) => void;
  writeStorageFromKeys: (keyValuePairs: Partial<Record<TStorageKeys, string>>) => void;
  removeStorageFromKeys: (keys: TStorageKeys[]) => void;
  readStorageFromKeys: (keys: Array<TStorageKeys>) => Record<TStorageKeys, string>;
};
