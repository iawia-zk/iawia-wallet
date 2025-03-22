import { ethers, HDNodeWallet, JsonRpcProvider } from 'ethers';
import storage, { STORAGE_KEYS } from 'helpers/storage';
import { BURN_ADDRESS, TEST_CHAIN_KEY } from './walletService.constants';
import { TTransaction, TTransactionDetails } from './walletService.types';

class WalletService {
  private provider: JsonRpcProvider;

  private connectedWallet: HDNodeWallet | undefined;

  constructor() {
    this.provider = new JsonRpcProvider(TEST_CHAIN_KEY);
  }

  async importLocalWallet() {
    const phrase = await storage.readStorage(STORAGE_KEYS.WALLET_PHRASE);
    if (!phrase) {
      return null;
    }
    return this.importFromPhrase(phrase);
  }

  importFromPhrase(phrase: string) {
    const wallet = ethers.Wallet.fromPhrase(phrase);
    this.connectedWallet = wallet.connect(this.provider);
    return wallet;
  }

  async getBalance(address: string) {
    const balance = await this.provider.getBalance(address);
    return ethers.formatEther(balance);
  }

  async sendInitialTransaction(data: string) {
    const hexData = ethers.hexlify(ethers.toUtf8Bytes(data));

    const tx = {
      to: BURN_ADDRESS,
      value: ethers.parseEther('0.001'),
      data: hexData,
    };

    try {
      const txResponse = await this.connectedWallet?.sendTransaction(tx);
      return txResponse;
    } catch (error) {
      return null;
    }
  }

  async getTransactions(): Promise<TTransaction[]> {
    const response = await fetch(TEST_CHAIN_KEY, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        jsonrpc: '2.0',
        id: 1,
        method: 'alchemy_getAssetTransfers',
        params: [
          {
            fromBlock: '0x0',
            toBlock: 'latest',
            fromAddress: this.connectedWallet?.address,
            category: ['external'],
          },
        ],
      }),
    });

    const data = await response.json();
    console.log('data', data);
    return data.result.transfers;
  }

  async getTransactionDetails(txHash: string): Promise<TTransactionDetails | null> {
    const tx = await this.provider.getTransaction(txHash);
    return tx;
  }
}

export const walletService = new WalletService();
