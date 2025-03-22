import { STORAGE_KEYS } from './storage.constants';

export type TStorageKeys = STORAGE_KEYS;

export type TStorage = {
  readStorage: (key: TStorageKeys) => Promise<string | null>;
  writeStorage: (key: TStorageKeys, data: string) => Promise<void>;
  removeStorage: (key: TStorageKeys) => Promise<void>;
  writeStorageFromKeys: (keyValuePairs: Partial<Record<TStorageKeys, string>>) => Promise<void>;
  removeStorageFromKeys: (keys: TStorageKeys[]) => Promise<void>;
  readStorageFromKeys: (keys: Array<TStorageKeys>) => Promise<Record<TStorageKeys, string>>;
};
