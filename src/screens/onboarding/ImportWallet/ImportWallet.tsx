import BottomInsetBox from 'components/BottomInsetBox';
import Page from 'components/Page';
import Box from 'components/core/Box';
import Button from 'components/core/Button';
import Text from 'components/core/Text';
import useForm from 'hooks/useForm';
import { FC } from 'react';
import BaseForm from 'components/BaseForm';
import FieldTextInput from 'components/fields/FieldTextInput';
import { useTranslation } from 'react-i18next';
import alertModal from 'helpers/alertModal';
import storage, { STORAGE_KEYS } from 'helpers/storage';
import { walletService } from 'helpers/walletService';
import { FORM_VALIDATION_SCHEMA } from './ImportWallet.constants';
import { TImportWalletFormData } from './ImportWallet.types';

const ImportWallet: FC = () => {
  // const [file, setFile] = useState<File>();
  // const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TImportWalletFormData>({
    schema: FORM_VALIDATION_SCHEMA,
    defaultValues: {
      decrypter: '',
      walletKey: '',
    },
  });

  async function onSubmit(data: TImportWalletFormData) {
    if (data.walletKey && data.decrypter) {
      try {
        // const fileContent = await readFileContent(file);

        // Decryption
        // const decrypted = await decrypt(data.walletKey, data.decrypter);
        // const walletData = JSON.parse(decrypted);

        // Save to chrome storage
        const wallet = walletService.importFromPhrase(data.walletKey);

        if (wallet.address) {
          await storage.writeStorage(STORAGE_KEYS.WALLET_PHRASE, data.walletKey);
        }
      } catch (error) {
        alertModal.error({
          titleId: 'errors.decryption',
        });
      }
    }
  }

  /*
  const handleFileUpload = () => {
    fileInputRef.current?.click();
  };

  
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = event.target.files?.[0];
    if (selectedFile) {
      setFile(selectedFile);
    }
  };
  

  const handleRemoveFile = () => {
    setFile(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };
  */

  return (
    <Page header>
      <BaseForm isSubmitButtonVisible={false}>
        <Box gap="m" flexDirection="column">
          <Text variant="titleSection">{t('onboarding.import.title')}</Text>
          <Text variant="textBody">{t('onboarding.import.instructions')}</Text>
          {/* <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".iawia"
              style={{ display: 'none' }}
            /> */}
          <FieldTextInput
            control={control}
            errors={errors}
            name="walletKey"
            label={t('onboarding.import.walletKeyLabel')}
            placeholder={t('onboarding.import.walletKeyPlaceholder')}
          />
          {/* <Button
              labelId={(file?.name ?? 'onboarding.import.uploadButton') as TI18nId}
              leftIcon={file ? undefined : Upload04Icon}
              onPress={handleFileUpload}
              block={!!file}
            />
            {file && (
              <IconButton
                icon={XCloseIcon}
                onPress={handleRemoveFile}
                variant="error"
                size="large"
              />
            )} */}
          <Text variant="textBody">{t('onboarding.import.passwordInstructions')}</Text>
          <FieldTextInput
            control={control}
            errors={errors}
            name="decrypter"
            label={t('onboarding.import.passwordLabel')}
            placeholder={t('onboarding.import.passwordPlaceholder')}
          />
          <BottomInsetBox sticky>
            <Button onPress={handleSubmit(onSubmit)} labelId="onboarding.import.submitButton" />
          </BottomInsetBox>
        </Box>
      </BaseForm>
    </Page>
  );
};

export default ImportWallet;
