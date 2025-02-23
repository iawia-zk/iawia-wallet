import { FC } from 'react';
import { useNavigate } from 'react-router-dom';

import Page from 'components/Page';
import Text from 'components/core/Text';
import Button from 'components/core/Button';
import Box from 'components/core/Box';
import { IMPORT_WALLET_MESSAGE } from 'constants/chromeMessages';

const Onboard: FC = () => {
  const navigate = useNavigate();

  const handleCreateWallet = () => {
    navigate('/create-wallet');
  };

  const handleImportWallet = () => {
    // navigate('/import-wallet');
    chrome.runtime.sendMessage({ action: IMPORT_WALLET_MESSAGE });
  };

  return (
    <Page header>
      <Box flex={1} alignItems="center" justifyContent="center" padding="xl" gap="l">
        <Box>
          <Text variant="titleSection" color="textPrimary">
            Welcome to IAWIA
          </Text>
          <Text variant="textBody" color="textSecondary" textAlign="center">
            Choose how you'd like to get started
          </Text>
        </Box>
        <Box width="100%" gap="m">
          <Button variant="primary" onPress={handleImportWallet}>
            I already have a wallet
          </Button>
          <Button variant="secondary" onPress={handleCreateWallet}>
            I need a new wallet
          </Button>
        </Box>
      </Box>
    </Page>
  );
};

export default Onboard;
