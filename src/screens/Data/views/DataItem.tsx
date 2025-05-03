import { ReactElement } from 'react';
import Text from 'components/core/Text/Text';
import Box from 'components/core/Box';
import CheckVerified01Icon from 'components/core/Icon/views/CheckVerified01Icon';
import XCloseIcon from 'components/core/Icon/views/XCloseIcon';
import spacing from 'theme/spacing';
import { TDataItem } from '../Data.types';

function DataItem({ dataType, verified, ipfsHash }: TDataItem): ReactElement {
  return (
    <Box
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
      p="m"
      borderWidth="1px"
      borderStyle="solid"
      borderColor="borderOutline"
      borderRadius={spacing.l}>
      <Box>
        <Text>{dataType.replace(/_/g, ' ')}</Text>
        {ipfsHash && (
          <a
            href={`https://gateway.pinata.cloud/ipfs/${ipfsHash}`}
            target="_blank"
            rel="noreferrer">
            data
          </a>
        )}
      </Box>
      <Box color={verified ? 'statusPositivePrimary' : 'statusErrorPrimary'}>
        {verified ? (
          <CheckVerified01Icon iconColor="textPrimary" />
        ) : (
          <XCloseIcon iconColor="textPrimary" />
        )}
      </Box>
    </Box>
  );
}

export default DataItem;
