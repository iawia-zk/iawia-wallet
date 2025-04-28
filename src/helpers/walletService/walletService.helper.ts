import { ethers } from 'ethers';
import { isNaN } from 'lodash';

export function getRawDataFromHex(hex: string) {
  return ethers.toUtf8String(hex);
}

export function formatBalance(balance: string): string {
  const num = parseFloat(balance);
  if (isNaN(num)) return balance;
  return num.toFixed(6);
}
