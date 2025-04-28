import BottomInsetBox from 'components/BottomInsetBox';
import Page from 'components/Page';
import Box from 'components/core/Box';
import Button from 'components/core/Button';
import Text from 'components/core/Text';
import useForm from 'hooks/useForm';
import { FC, useState } from 'react';
import BaseForm from 'components/BaseForm';
import FieldTextInput from 'components/fields/FieldTextInput';
import { useTranslation } from 'react-i18next';
import alertModal from 'helpers/alertModal';
import { decrypt } from 'helpers/encryption';
import { walletService } from 'helpers/walletService';
import storage, { STORAGE_KEYS } from 'helpers/storage';
import { TImportWalletFormData } from './ImportWallet.types';
import { FORM_VALIDATION_SCHEMA } from './ImportWallet.constants';

const ImportWallet: FC = () => {
  const [isSuccess, setIsSuccess] = useState(false);
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TImportWalletFormData>({
    schema: FORM_VALIDATION_SCHEMA,
    defaultValues: {
      walletKey: '',
    },
  });

  async function onSubmit(data: TImportWalletFormData) {
    if (data.walletKey) {
      try {
        // Decryption
        const decrypted = await decrypt(data.walletKey, import.meta.env.VITE_PHRASE_ENCRYPTION_KEY);

        // Save to chrome storage
        const wallet = walletService.importFromPhrase(decrypted);

        if (wallet.address) {
          await storage.writeStorage(STORAGE_KEYS.WALLET_PHRASE, decrypted);
          setIsSuccess(true);
        }
      } catch (error) {
        console.error('error', error);
        alertModal.error({
          titleId: 'errors.decryption',
        });
      }
    }
  }

  return (
    <Page header>
      <Box pt="m">
        {isSuccess ? (
          <Box>
            <Text variant="titleSection">{t('onboarding.import.successTitle')}</Text>
            <Text variant="textBody">{t('onboarding.import.successDescription')}</Text>
          </Box>
        ) : (
          <BaseForm isSubmitButtonVisible={false}>
            <Box gap="m" flexDirection="column">
              <Text variant="titleSection">{t('onboarding.import.title')}</Text>
              <Text variant="textBody">{t('onboarding.import.instructions')}</Text>

              <FieldTextInput
                control={control}
                errors={errors}
                name="walletKey"
                label={t('onboarding.import.walletKeyLabel')}
                placeholder={t('onboarding.import.walletKeyPlaceholder')}
              />
              <BottomInsetBox sticky>
                <Button onPress={handleSubmit(onSubmit)} labelId="onboarding.import.submitButton" />
              </BottomInsetBox>
            </Box>
          </BaseForm>
        )}
      </Box>
    </Page>
  );
};

export default ImportWallet;
