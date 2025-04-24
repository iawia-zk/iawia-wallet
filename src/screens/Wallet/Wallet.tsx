import { ReactElement } from 'react';
import Page from 'components/Page';
import Box from 'components/core/Box';
import WalletCard from './views/WalletCard';
import useWalletTransactions from './Wallet.hooks';

function Wallet(): ReactElement {
  useWalletTransactions();

  return (
    <Page>
      <Box p="m">
        <WalletCard />
      </Box>
    </Page>
  );
}

export default Wallet;
