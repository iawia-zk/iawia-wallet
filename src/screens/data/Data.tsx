import { FC } from 'react';
import Box from 'components/core/Box';
import { useWalletContext } from 'context/WalletProvider/WalletProvider';
import { ZKType } from 'enums/ZKType';
import Page from '../../components/Page';
import DataItem from './views/DataItem';

const Data: FC = () => {
  const { walletState } = useWalletContext();
  const { walletData } = walletState;

  return (
    <Page isLoading={!walletData}>
      <Box p="m" gap="m">
        {Object.keys(ZKType).map((type) => (
          <DataItem
            key={type}
            dataType={type as ZKType}
            ipfsHash={walletData?.snarks.find((snark) => snark.type === type)?.ipfsHash}
            verified={!!walletData?.snarks.some((snark) => snark.type === type)}
          />
        ))}
      </Box>
    </Page>
  );
};

export default Data;
