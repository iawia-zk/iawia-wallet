import { ReactElement, useState } from 'react';
import Page from 'components/Page';
import Box from 'components/core/Box';
import SegmentedControl from 'components/core/SegmentedControl';
import WalletCard from './views/WalletCard';
import TokenList from './views/TokenList';
import TransactionList from './views/TransactionList';
import useWalletTransactions from './Wallet.hooks';
import { WalletTabOption, SEGMENTED_CONTROL_OPTIONS } from './Wallet.constants';

function Wallet(): ReactElement {
  const [selectedOption, setSelectedOption] = useState<WalletTabOption>(WalletTabOption.TOKENS);
  useWalletTransactions();

  return (
    <Page>
      <Box p="m" gap="m">
        <WalletCard />
        <SegmentedControl<WalletTabOption>
          options={SEGMENTED_CONTROL_OPTIONS}
          defaultValue={selectedOption}
          onChange={setSelectedOption}
        />
        {selectedOption === WalletTabOption.TOKENS && <TokenList />}
        {selectedOption === WalletTabOption.ACTIVITY && <TransactionList />}
      </Box>
    </Page>
  );
}

export default Wallet;
