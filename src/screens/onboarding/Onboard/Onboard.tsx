import { FC, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import Page from 'components/Page';
import Text from 'components/core/Text';
import Button from 'components/core/Button';
import Box from 'components/core/Box';
import { IMPORT_WALLET_MESSAGE } from 'constants/chromeMessages';
import { chromeStorage } from 'helpers/chromeStorage';

const Onboard: FC = () => {
  const navigate = useNavigate();
  const { t } = useTranslation();

  useEffect(() => {
    const checkWallet = async () => {
      const walletData = await chromeStorage.get('wallet');
      if (walletData) {
        navigate('/home');
      }
    };
    checkWallet();
  }, []);

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
            {t('onboarding.title')}
          </Text>
          <Text variant="textBody" color="textSecondary" textAlign="center">
            {t('onboarding.instructions')}
          </Text>
        </Box>
        <Box width="100%" gap="m">
          <Button
            variant="primary"
            onPress={handleImportWallet}
            labelId="onboarding.import.title"
          />
          <Button
            variant="secondary"
            onPress={handleCreateWallet}
            labelId="onboarding.create.title"
          />
        </Box>
      </Box>
    </Page>
  );
};

export default Onboard;
