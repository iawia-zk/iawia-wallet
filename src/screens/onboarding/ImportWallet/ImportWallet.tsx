import BottomInsetBox from 'components/BottomInsetBox';
import Page from 'components/Page';
import Box from 'components/core/Box';
import Button from 'components/core/Button';
import { Upload04Icon, XCloseIcon } from 'components/core/Icon';
import IconButton from 'components/core/IconButton';
import Text from 'components/core/Text';
import useForm from 'hooks/useForm';
import { FC, useState, useRef } from 'react';
import BaseForm from 'components/BaseForm';
import FieldTextInput from 'components/fields/FieldTextInput';
import { useTranslation } from 'react-i18next';
import { FORM_VALIDATION_SCHEMA } from './ImportWallet.constants';
import { TImportWalletFormData } from './ImportWallet.types';

const ImportWallet: FC = () => {
  const [file, setFile] = useState<File>();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { t } = useTranslation();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<TImportWalletFormData>({
    schema: FORM_VALIDATION_SCHEMA,
    defaultValues: {
      decrypter: '',
      file: undefined,
    },
  });

  function onSubmit(data: TImportWalletFormData) {
    console.log(data);
  }

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

  return (
    <Page header>
      <BaseForm isSubmitButtonVisible={false}>
        <Box gap="m" flexDirection="column">
          <Text variant="titleSection">{t('onboarding.import.title')}</Text>
          <Text variant="textBody">{t('onboarding.import.instructions')}</Text>
          <Box flexDirection="row" gap="s" alignItems="center">
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept=".iawia"
              style={{ display: 'none' }}
            />
            <Button
              leftIcon={file ? undefined : Upload04Icon}
              onPress={handleFileUpload}
              block={!!file}>
              {file?.name ?? t('onboarding.import.uploadButton')}
            </Button>
            {file && (
              <IconButton
                icon={XCloseIcon}
                onPress={handleRemoveFile}
                variant="error"
                size="large"
              />
            )}
          </Box>
          <Text variant="textBody">{t('onboarding.import.passwordInstructions')}</Text>
          <FieldTextInput
            control={control}
            errors={errors}
            name="decrypter"
            label={t('onboarding.import.passwordLabel')}
            placeholder={t('onboarding.import.passwordPlaceholder')}
          />
          <BottomInsetBox sticky>
            <Button disabled={!file} onPress={handleSubmit(onSubmit)}>
              {t('onboarding.import.submitButton')}
            </Button>
          </BottomInsetBox>
        </Box>
      </BaseForm>
    </Page>
  );
};

export default ImportWallet;
