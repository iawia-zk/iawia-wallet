import { fromPairs } from 'lodash/fp';

import { STORAGE_KEYS, STORAGE_PREFIX } from './storage.constants';
import { TStorage, TStorageKeys } from './storage.types';

function readStorage(key: TStorageKeys): string | null {
  return localStorage.getItem(`${STORAGE_PREFIX}${key}`);
}

function writeStorage(key: TStorageKeys, data: string): void {
  localStorage.setItem(`${STORAGE_PREFIX}${key}`, data);
}

function writeStorageFromKeys(keyValuePairs: Partial<Record<TStorageKeys, string>>): void {
  Object.entries(keyValuePairs).forEach(([key, value]) => [
    writeStorage(key as TStorageKeys, value as string),
  ]);
}

function removeStorage(key: TStorageKeys): void {
  localStorage.removeItem(`${STORAGE_PREFIX}${key}`);
}

function removeStorageFromKeys(keys: TStorageKeys[]): void {
  keys.forEach(removeStorage);
}

function readStorageFromKeys(keys: STORAGE_KEYS[]): Record<STORAGE_KEYS, string> {
  const entries = keys.map((key) => [key, localStorage.getItem(`${STORAGE_PREFIX}${key}`)]);
  return fromPairs(entries) as Record<STORAGE_KEYS, string>;
}

const storage: TStorage = {
  readStorage,
  readStorageFromKeys,
  writeStorage,
  writeStorageFromKeys,
  removeStorage,
  removeStorageFromKeys,
};

export default storage;
