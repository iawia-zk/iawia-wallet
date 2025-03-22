import { createContext, ReactElement, useContext, useEffect, useState } from 'react';
import { TChildrenOnly } from 'types/common';
import { walletService } from 'helpers/walletService';
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

  function sendInitialTransaction(data: string) {
    walletService?.sendInitialTransaction(data);
  }

  function importWallet(phrase: string) {
    const wallet = walletService?.importFromPhrase(phrase);
    setState((prevState) => ({ ...prevState, wallet }));
  }

  const value: TWalletContext = {
    walletState: state,
    walletDispatch: { importWallet, sendInitialTransaction },
  };

  return <walletContext.Provider value={value}>{children}</walletContext.Provider>;
}

export default WalletProvider;

export const useWalletContext = (): TWalletContext => useContext(walletContext);
