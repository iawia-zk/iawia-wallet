import CopyInfoItem from 'components/CopyInfoItem';
import Box from 'components/core/Box';
import Button from 'components/core/Button';
import Page from 'components/Page';
import TextInput from 'components/TextInput';
import { useWalletContext } from 'context/WalletProvider/WalletProvider';
import { walletService } from 'helpers/walletService';
import { BURN_ADDRESS } from 'helpers/walletService/walletService.constants';
import { getRawDataFromHex } from 'helpers/walletService/walletService.helper';
import { TWalletData } from 'types/walletData';

import { useState } from 'react';

const WalletTempPage = () => {
  const { walletState, walletDispatch } = useWalletContext();
  const [phrase, setPhrase] = useState(walletState.wallet?.mnemonic?.phrase);
  const [txDataLoading, setTxDataLoading] = useState(false);
  const [txData, setTxData] = useState<string | null>(null);

  async function getTransactionData() {
    setTxDataLoading(true);
    const transactions = await walletService.getTransactions();

    console.log('transactions', transactions);

    if (!transactions || transactions.length === 0) {
      return;
    }

    const transaction = transactions.filter((tx) => tx.to === BURN_ADDRESS)[0];

    const transactionDetails = await walletService.getTransactionDetails(transaction.hash);
    console.log('transactionDetails', transactionDetails);
    const stringData = getRawDataFromHex(transactionDetails?.data ?? '');
    const data: TWalletData = JSON.parse(stringData);
    setTxData('Retrieved, navigate to zk');
    setTxDataLoading(false);
    walletDispatch.setWalletData(data);
  }

  return (
    <Page>
      <Box gap="m" mx="m" px="m" overflowY="scroll" overflowX="hidden">
        <TextInput
          label="label.phrase"
          placeholder="label.phrase"
          value={phrase}
          onChange={(e) => setPhrase(e.target.value)}
          hasError={false}
        />
        <CopyInfoItem labelId="label.walletAddress" value={walletState.wallet?.address ?? '-'} />
        <CopyInfoItem labelId="label.phrase" value={walletState.wallet?.mnemonic?.phrase ?? '-'} />
        <CopyInfoItem labelId="label.balance" value={walletState.balance ?? '-'} />
        {txData && <CopyInfoItem labelId="label.txData" value={txData} />}
        <Button
          onPress={() => walletDispatch.importWallet(phrase ?? '')}
          labelId="button.importWallet"
        />
        <Button
          onPress={() => walletDispatch.sendInitialTransaction('Hello from serhat')}
          labelId="button.sendInitialTransaction"
        />
        <Button
          onPress={getTransactionData}
          labelId="button.getTransactions"
          loading={txDataLoading}
        />
      </Box>
    </Page>
  );
};

export default WalletTempPage;
