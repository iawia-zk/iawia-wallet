import CopyInfoItem from 'components/CopyInfoItem';
import Box from 'components/core/Box';
import Button from 'components/core/Button';
import Page from 'components/Page';
import TextInput from 'components/TextInput';
import { useWalletContext } from 'context/WalletProvider/WalletProvider';
import { walletService } from 'helpers/walletService';
import { getRawDataFromHex } from 'helpers/walletService/walletService.helper';

import { useState } from 'react';

const Wallet = () => {
  const { walletState, walletDispatch } = useWalletContext();
  const [phrase, setPhrase] = useState(walletState.wallet?.mnemonic?.phrase);
  const [txDataLoading, setTxDataLoading] = useState(false);
  const [txData, setTxData] = useState<string | null>(null);
  async function getTransactionData() {
    setTxDataLoading(true);
    const transactions = await walletService.getTransactions();

    if (!transactions || transactions.length === 0) {
      return;
    }

    const transaction = transactions[0];
    console.log('transaction', transaction);

    const transactionDetails = await walletService.getTransactionDetails(transaction.hash);
    const data = getRawDataFromHex(transactionDetails?.data ?? '');
    setTxData(data);
    setTxDataLoading(false);
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

export default Wallet;
