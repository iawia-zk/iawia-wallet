import { useEffect, useState } from 'react';
import Page from 'components/Page';
import Box from 'components/core/Box';
import Text from 'components/core/Text';
import Button from 'components/core/Button';
import { getTitleIdByZkType, ZKType } from 'enums/ZKType';
import Card from 'components/Card';
import ListItem from 'components/ListItem';
import { CheckCircleIcon } from 'components/core/Icon';

interface CompanyData {
  companyName: string;
  companyLogo: string;
  zkTypes: ZKType[];
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
    }
  }, []);

  const handleVerify = () => {
    // Implement handshake here
    console.log('Verifying:', companyData);
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
        {/* </Card> */}

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
