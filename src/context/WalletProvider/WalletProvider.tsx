import { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import { TChildrenOnly } from 'types/common';
import { walletService } from 'helpers/walletService';
import { TTransactionData } from 'types/walletData';
import { TWalletContext, TWalletState } from './WalletProvider.types';
import { INITIAL_DISPATCH, INITIAL_STATE } from './WalletProvider.constants';

const walletContext = createContext<TWalletContext>({
  walletState: INITIAL_STATE,
  walletDispatch: INITIAL_DISPATCH,
});

function WalletProvider({ children }: TChildrenOnly): ReactElement {
  const [state, setState] = useState<TWalletState>(INITIAL_STATE);

  useEffect(() => {
    async function init() {
      const wallet = await walletService.importLocalWallet();

      if (wallet) {
        setState((prevState) => ({ ...prevState, wallet }));
      }
    }
    init();
  }, []);

  async function getBalance() {
    const balance = await walletService.getBalance(state.wallet?.address ?? '');
    setState((prevState) => ({ ...prevState, balance }));
  }

  async function getTokens() {
    const tokens = await walletService.getTokenBalances();
    setState((prevState) => ({ ...prevState, tokens }));
  }

  function sendInitialTransaction(data: string) {
    walletService?.sendInitialTransaction(data);
  }

  function importWallet(phrase: string) {
    const wallet = walletService?.importFromPhrase(phrase);
    setState((prevState) => ({ ...prevState, wallet }));
  }

  function setTransactionData(data: TTransactionData) {
    setState((prevState) => ({ ...prevState, transactionData: data }));
  }

  const value: TWalletContext = {
    walletState: state,
    walletDispatch: {
      importWallet,
      sendInitialTransaction,
      setTransactionData,
      getBalance,
      getTokens,
    },
  };

  return <walletContext.Provider value={value}>{children}</walletContext.Provider>;
}

export default WalletProvider;

export const useWalletContext = (): TWalletContext => useContext(walletContext);
