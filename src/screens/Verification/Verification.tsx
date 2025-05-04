import { useEffect, useState } from 'react';
import Page from 'components/Page';
import Box from 'components/core/Box';
import Text from 'components/core/Text';
import Button from 'components/core/Button';
import { getTitleIdByZkType, ZKType } from 'enums/ZKType';
import Card from 'components/Card';
import ListItem from 'components/ListItem';
import { CheckCircleIcon } from 'components/core/Icon';
import { TTransactionData } from 'types/walletData';
import { sendVerificationRequest } from 'api/api';

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
    // TODO1: Base 64 code can be retrieved in an encrypted way
    // TODO2: Send the verification request to the server

    const mockPassportData: TTransactionData = {
      dateOfBirth: '1990-01-01',
      dateOfExpiry: '2025-01-01',
      documentNumber: '1234567890',
      issuingCountry: 'TUR',
      nationality: 'TUR',
    };

    const response = await sendVerificationRequest({
      passportData: mockPassportData,
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
        {companyData.circuits && <div>{companyData.circuits}</div>}
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
