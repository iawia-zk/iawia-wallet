import Page from 'components/Page';
import Box from 'components/core/Box';
import Text from 'components/core/Text';
import { FC } from 'react';
import QRCode from 'react-qr-code';
import { useTranslation } from 'react-i18next';

const CreateWallet: FC = () => {
  const { t } = useTranslation();

  return (
    <Page header back>
      <Box gap="m" flexDirection="column" alignItems="center">
        <Text as="h1" variant="titleSection">
          {t('onboarding.create.title')}
        </Text>
        <Text variant="textBody" color="textSecondary">
          {t('onboarding.create.description')}
        </Text>
        <Box gap="s" flexDirection="column" alignItems="center">
          <QRCode value="https://iawia.xyz" size={200} />
          <a href="https://iawia.xyz" target="_blank" rel="noopener noreferrer">
            <Text variant="textBody" color="textPrimary" underline>
              {t('onboarding.create.visitLink')}
            </Text>
          </a>
        </Box>
      </Box>
    </Page>
  );
};

export default CreateWallet;
