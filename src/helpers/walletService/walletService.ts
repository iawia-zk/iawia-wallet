import { ethers, HDNodeWallet, JsonRpcProvider } from 'ethers';
import storage, { STORAGE_KEYS } from 'helpers/storage';
import { BURN_ADDRESS, TEST_CHAIN_KEY } from './walletService.constants';
import {
  TTransaction,
  TTransactionDetails,
  TTokenBalance,
  TAlchemyTokenMetadata,
} from './walletService.types';

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

  async getTokenBalances(): Promise<TTokenBalance[]> {
    if (!this.connectedWallet?.address) {
      return [];
    }

    try {
      const response = await fetch(TEST_CHAIN_KEY, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          jsonrpc: '2.0',
          id: 1,
          method: 'alchemy_getTokenBalances',
          params: [this.connectedWallet.address, 'erc20'],
        }),
      });

      const data = await response.json();

      if (data.error) {
        console.error('Error fetching token balances:', data.error);
        return [];
      }

      const { tokenBalances } = data.result;

      // Get token metadata for each token
      const tokensWithMetadata = await Promise.all(
        // @ts-ignore
        tokenBalances.map(async (token) => {
          const metadataResponse = await fetch(TEST_CHAIN_KEY, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              jsonrpc: '2.0',
              id: 1,
              method: 'alchemy_getTokenMetadata',
              params: [token.contractAddress],
            }),
          });

          const metadataData = await metadataResponse.json();
          const metadata: TAlchemyTokenMetadata = metadataData.result;

          return {
            contractAddress: token.contractAddress,
            tokenBalance: token.tokenBalance,
            name: metadata.name,
            symbol: metadata.symbol,
            decimals: metadata.decimals,
            logo: metadata.logo,
          };
        })
      );

      // Get ETH balance
      const ethBalance = await this.getBalance(this.connectedWallet.address);

      // Add ETH to the list of tokens
      const ethToken: TTokenBalance = {
        contractAddress: '0x0000000000000000000000000000000000000000', // Zero address for ETH
        tokenBalance: ethers.parseEther(ethBalance).toString(),
        name: 'Ethereum',
        symbol: 'ETH',
        decimals: 18,
        logo: 'https://raw.githubusercontent.com/trustwallet/assets/master/blockchains/ethereum/assets/0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2/logo.png',
      };

      return [ethToken, ...tokensWithMetadata];
    } catch (error) {
      console.error('Error fetching token balances:', error);
      return [];
    }
  }
}

export const walletService = new WalletService();
