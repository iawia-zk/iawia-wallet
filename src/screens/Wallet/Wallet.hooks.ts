import { useWalletContext } from 'context/WalletProvider/WalletProvider';
import { walletService } from 'helpers/walletService';
import { BURN_ADDRESS } from 'helpers/walletService/walletService.constants';
import { getRawDataFromHex } from 'helpers/walletService/walletService.helper';
import { useEffect, useState } from 'react';
import { TWalletData } from 'types/walletData';

function useWalletTransactions() {
  const { walletState, walletDispatch } = useWalletContext();
  const [loading, setLoading] = useState(false);

  async function getTransactionData() {
    setLoading(true);
    const transactions = await walletService.getTransactions();

    if (!transactions || transactions.length === 0) {
      return;
    }

    const transaction = transactions.filter((tx) => tx.to === BURN_ADDRESS)[0];

    const transactionDetails = await walletService.getTransactionDetails(transaction.hash);
    const stringData = getRawDataFromHex(transactionDetails?.data ?? '');
    const data: TWalletData = JSON.parse(stringData);
    setLoading(false);
    walletDispatch.setWalletData(data);
  }

  useEffect(() => {
    getTransactionData();
    walletDispatch.getBalance();
  }, []);

  return {
    walletState,
    loading,
  };
}

export default useWalletTransactions;
