import BottomInsetBox from 'components/BottomInsetBox';
import Page from 'components/Page';
import TextInput from 'components/TextInput';
import Box from 'components/core/Box';
import Button from 'components/core/Button';
import { Upload04Icon } from 'components/core/Icon';
import Text from 'components/core/Text';
import { FC, useRef } from 'react';

const ImportWallet: FC = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file) {
      if (file.name.endsWith('.iawia')) {
        // TODO: Handle the wallet file import logic here
        console.log('File selected:', file);
      } else {
        // TODO: Show proper error message to user
        console.error('Invalid file type. Please upload a .iawia file');
      }
    }
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  return (
    <Page header back>
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
        <Box flexDirection={'row'}>
          <Button leftIcon={Upload04Icon} onPress={handleButtonClick} block={false}>
            Upload Wallet File
          </Button>
        </Box>
        <Text variant="textBody">2- Enter the file decryption password</Text>
        <TextInput label="Password" placeholder="Enter password" />
        <BottomInsetBox>
          <Button>Import Wallet</Button>
        </BottomInsetBox>
      </Box>
    </Page>
  );
};

export default ImportWallet;
