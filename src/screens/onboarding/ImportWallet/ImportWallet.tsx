import BottomInsetBox from 'components/BottomInsetBox';
import Page from 'components/Page';
import TextInput from 'components/TextInput';
import Box from 'components/core/Box';
import Button from 'components/core/Button';
import { Upload04Icon, XCloseIcon } from 'components/core/Icon';
import IconButton from 'components/core/IconButton';
import Text from 'components/core/Text';
import useForm from 'hooks/useForm';
import { FC, useRef, useState } from 'react';
import { FORM_VALIDATION_SCHEMA } from './ImportWallet.constants';
import { TImportWalletFormData } from './ImportWallet.types';
import BaseForm from 'components/BaseForm';
import FieldTextInput from 'components/fields/FieldTextInput';

const ImportWallet: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [file, setFile] = useState<File>();

  const {
    control,
    handleSubmit,
    setValue,
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

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.endsWith('.iawia')) {
        setFile(file);
      } else {
        // TODO: Show proper error message to user
        console.error('Invalid file type. Please upload a .iawia file');
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  const handleRemoveFile = () => {
    setFile(undefined);
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  return (
    <Page header back>
      <BaseForm isSubmitButtonVisible={false}>
        <Box gap={'m'} flexDirection={'column'}>
          <Text variant="titleSection">Import Wallet</Text>
          <Text variant="textBody">
            1- Upload your wallet backup file (.iawia) to restore your wallet
          </Text>
          <input
            type="file"
            accept=".iawia"
            ref={fileInputRef}
            onChange={handleFileUpload}
            style={{ display: 'none' }}
          />
          <Box flexDirection={'row'} gap={'s'} alignItems={'center'}>
            <Button
              leftIcon={file ? undefined : Upload04Icon}
              onPress={handleButtonClick}
              block={!!file}>
              {file?.name ?? 'Upload Wallet File'}
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
          <Text variant="textBody">2- Enter the file decryption password</Text>
          <FieldTextInput
            control={control}
            errors={errors}
            name="decrypter"
            label="Decryption Password"
            placeholder="Enter decryption password"
          />
          <BottomInsetBox>
            <Button disabled={!file} onPress={handleSubmit(onSubmit)}>
              Import Wallet
            </Button>
          </BottomInsetBox>
        </Box>
      </BaseForm>
    </Page>
  );
};

export default ImportWallet;
