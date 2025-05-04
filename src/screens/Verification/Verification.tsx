import { useEffect, useState } from 'react';
import Page from 'components/Page';
import Box from 'components/core/Box';
import Text from 'components/core/Text';
import Button from 'components/core/Button';
import { getTitleIdByZkType, ZKType } from 'enums/ZKType';
import Card from 'components/Card';
import ListItem from 'components/ListItem';
import { CheckCircleIcon } from 'components/core/Icon';
import { sendVerificationRequest } from 'api/api';
import storage, { STORAGE_KEYS } from 'helpers/storage';
import { TTransactionDataEncrypted } from 'screens/Data/Data.types';

interface CompanyData {
  companyName: string;
  companyLogo: string;
  zkTypes: ZKType[];
  circuits?: string[];
}

function Verification() {
  const [companyData, setCompanyData] = useState<CompanyData | null>({
    companyName: '',
    companyLogo: '',
    zkTypes: [],
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const data = urlParams.get('data');
    if (data) {
      setCompanyData(JSON.parse(data));
      console.log('Company Data:', JSON.parse(data));
    }
  }, []);

  const handleVerify = async () => {
    // Get data from storage
    const storedData = await storage.readStorage(STORAGE_KEYS.ENCRYPTED_PASSPORT_DATA);
    if (!storedData) {
      console.error('No passport data found in storage');
      return;
    }

    const passportData: TTransactionDataEncrypted = JSON.parse(storedData);

    const response = await sendVerificationRequest({
      passportData,
      runnables: companyData?.circuits || [],
    });

    if (!response.result) {
      console.error('Verification failed', response.error);
      return;
    }

    chrome.runtime.sendMessage({
      action: 'RUNTIME_IAWIA_SEND_VERIFICATION_RESPONSE_TO_SDK',
      payload: {
        action: 'VERIFICATION_RESPONSE',
        payload: response.result,
      },
    });

    // window.close();
  };

  if (!companyData) {
    return (
      <Page>
        <Box alignItems="center" justifyContent="center" flex={1}>
          <Text>Loading...</Text>
        </Box>
      </Page>
    );
  }

  return (
    <Page header>
      <Box padding="xl" gap="xl">
        {/* <Card alignItems="start" gap="m" p="m"> */}
        <img
          src={companyData.companyLogo}
          alt={companyData.companyName}
          style={{
            maxWidth: '180px',
            objectFit: 'contain',
            objectPosition: 'center',
          }}
        />
        <Text variant="textBodyBold">
          {companyData.companyName} wants you to verify some informations below:
        </Text>
        <Box gap="m">
          <Text variant="textBody">Requested Verifications</Text>
          {/* <Box backgroundColor="backgroundSecondary" padding="m" borderRadius="8px" gap="s"> */}
          {companyData.zkTypes.map((zkType, index) => (
            <Card key={index}>
              <ListItem leftIcon={CheckCircleIcon} labelId={getTitleIdByZkType(zkType)} />
            </Card>
          ))}
          {/* </Box> */}
        </Box>

        <Box marginTop="auto">
          <Button variant="primary" labelId="button.verify" onPress={handleVerify} />
        </Box>
      </Box>
    </Page>
  );
}

export default Verification;
