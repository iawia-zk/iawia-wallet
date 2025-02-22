import Page from 'components/Page';
import Box from 'components/core/Box';
import Text from 'components/core/Text';
import { FC } from 'react';
import QRCode from 'react-qr-code';

const CreateWallet: FC = () => {
  return (
    <Page header back>
      <Box gap={'m'} flexDirection={'column'} alignItems={'center'}>
        <Text as="h1" variant="titleSection">
          Download Our Mobile App
        </Text>
        <Text variant="textBody" color="textSecondary">
          For enhanced security and unique features, wallet creation is only available through our
          mobile app. Please scan the QR code below or visit our mobile app store pages to download
          the app.
        </Text>
        <Box gap={'s'} flexDirection={'column'} alignItems={'center'}>
          <QRCode value="https://iawia.xyz" size={200} />
          <a href="https://iawia.xyz" target="_blank" rel="noopener noreferrer">
            <Text variant="textBody" color="textPrimary" underline>
              or click here to visit
            </Text>
          </a>
        </Box>
      </Box>
    </Page>
  );
};

export default CreateWallet;
