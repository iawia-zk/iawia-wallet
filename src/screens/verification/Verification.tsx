import { useEffect, useState } from 'react';
import Page from 'components/Page';
import Box from 'components/core/Box';
import Text from 'components/core/Text';
import Button from 'components/core/Button';
import { ZKType } from 'enums/ZKType';

interface CompanyData {
  companyName: string;
  companyLogo: string;
  zkTypes: ZKType[];
}

function Verification() {
  const [companyData, setCompanyData] = useState<CompanyData | null>(null);

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
    <Page>
      <Box padding="xl" gap="xl">
        <Box alignItems="center" gap="m">
          <img
            src={companyData.companyLogo}
            alt={companyData.companyName}
            style={{
              maxWidth: '400px',
              height: '100px',
              objectFit: 'contain',
              objectPosition: 'center',
            }}
          />
          <Text variant="textBody">{companyData.companyName}</Text>
        </Box>

        <Box gap="m">
          <Text variant="textBody">Requested Verifications</Text>
          <Box backgroundColor="backgroundSecondary" padding="m" borderRadius="8px" gap="s">
            {companyData.zkTypes.map((zkType, index) => (
              <Box key={index} padding="s">
                <Text>{zkType}</Text>
              </Box>
            ))}
          </Box>
        </Box>

        <Box marginTop="auto">
          <Button variant="primary" labelId="button.verify" onPress={handleVerify} />
        </Box>
      </Box>
    </Page>
  );
}

export default Verification;
