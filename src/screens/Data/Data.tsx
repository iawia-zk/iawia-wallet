import { FC, useEffect, useState } from 'react';
import Box from 'components/core/Box';
import { walletService } from 'helpers/walletService';
import { BURN_ADDRESS } from 'helpers/walletService/walletService.constants';
import { getRawDataFromHex } from 'helpers/walletService/walletService.helper';
import { getJsonFromIpfsByKey } from 'helpers/ipfsHelper';
import { decrypt } from 'helpers/encryption';
import { TTransactionData } from 'types/walletData';
import storage, { STORAGE_KEYS } from 'helpers/storage';
import Page from '../../components/Page';
import { TTransactionDataEncrypted } from './Data.types';

const Data: FC = () => {
  const [passportData, setPassportData] = useState<TTransactionData | null>(null);

  async function fetchData() {
    const transactions = await walletService.getTransactions();

    if (!transactions || transactions.length === 0) {
      return;
    }

    const transaction = transactions.filter((tx) => tx.to === BURN_ADDRESS)[0];

    const transactionDetails = await walletService.getTransactionDetails(transaction.hash);
    const ipfsHash = getRawDataFromHex(transactionDetails?.data ?? '');
    const jsonDataEncrypted: TTransactionDataEncrypted = await getJsonFromIpfsByKey(ipfsHash);

    await storage.writeStorage(
      STORAGE_KEYS.ENCRYPTED_PASSPORT_DATA,
      JSON.stringify(jsonDataEncrypted)
    );

    const jsonData: TTransactionData = {
      dateOfBirth: '',
      dateOfExpiry: '',
      documentNumber: '',
      issuingCountry: '',
      nationality: '',
    };

    const dateOfExpiry = await decrypt(
      jsonDataEncrypted.dateOfExpiry,
      import.meta.env.VITE_PASSPORT_ENCRYPTION_KEY
    );

    const dateOfBirth = await decrypt(
      jsonDataEncrypted.dateOfBirth,
      import.meta.env.VITE_PASSPORT_ENCRYPTION_KEY
    );

    const documentNumber = await decrypt(
      jsonDataEncrypted.documentNumber,
      import.meta.env.VITE_PASSPORT_ENCRYPTION_KEY
    );

    const issuingCountry = await decrypt(
      jsonDataEncrypted.issuingCountry,
      import.meta.env.VITE_PASSPORT_ENCRYPTION_KEY
    );

    const nationality = await decrypt(
      jsonDataEncrypted.dateOfBirth,
      import.meta.env.VITE_PASSPORT_ENCRYPTION_KEY
    );

    jsonData.dateOfBirth = dateOfBirth;
    jsonData.dateOfExpiry = dateOfExpiry;
    jsonData.documentNumber = documentNumber;
    jsonData.issuingCountry = issuingCountry;
    jsonData.nationality = nationality;

    setPassportData(jsonData);
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <Page>
      <Box p="m" gap="m">
        {passportData ? (
          <Box gap="m" alignItems="flex-start">
            <Box justifyContent="start" alignItems="start">
              <strong>Document Number:</strong>
              {passportData.documentNumber}
            </Box>
            <Box justifyContent="start" alignItems="start">
              <strong>Date of Birth:</strong>
              {passportData.dateOfBirth}
            </Box>
            <Box justifyContent="start" alignItems="start">
              <strong>Date of Expiry:</strong>
              {passportData.dateOfExpiry}
            </Box>
            <Box justifyContent="start" alignItems="start">
              <strong>Issuing Country:</strong>
              {passportData.issuingCountry}
            </Box>
            <Box justifyContent="start" alignItems="start">
              <strong>Nationality:</strong>
              {passportData.nationality}
            </Box>
          </Box>
        ) : (
          <Box>Loading passport data...</Box>
        )}
      </Box>
    </Page>
  );
};

export default Data;
