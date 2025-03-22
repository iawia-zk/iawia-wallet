import { fromPairs } from 'lodash/fp';

import { chromeStorage } from 'helpers/chromeStorage';
import { STORAGE_PREFIX } from './storage.constants';
import { TStorage, TStorageKeys } from './storage.types';

async function readStorage(key: TStorageKeys): Promise<string | null> {
  return chromeStorage.get(`${STORAGE_PREFIX}${key}`);
}

async function writeStorage(key: TStorageKeys, data: string): Promise<void> {
  await chromeStorage.set(`${STORAGE_PREFIX}${key}`, data);
}

async function writeStorageFromKeys(
  keyValuePairs: Partial<Record<TStorageKeys, string>>
): Promise<void> {
  Object.entries(keyValuePairs).forEach(([key, value]) => [
    writeStorage(key as TStorageKeys, value as string),
  ]);
}

async function removeStorage(key: TStorageKeys): Promise<void> {
  await chromeStorage.set(`${STORAGE_PREFIX}${key}`, undefined);
}

async function removeStorageFromKeys(keys: TStorageKeys[]): Promise<void> {
  keys.forEach(removeStorage);
}

async function readStorageFromKeys(keys: TStorageKeys[]): Promise<Record<TStorageKeys, string>> {
  const entries = keys.map((key) => [key, chromeStorage.get(`${STORAGE_PREFIX}${key}`)]);
  return fromPairs(entries) as Record<TStorageKeys, string>;
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
