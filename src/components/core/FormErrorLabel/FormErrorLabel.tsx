import { ReactElement, memo } from 'react';

import Box from 'components/core/Box';
import Text from 'components/core/Text';

import { TFormErrorLabelProps } from './FormErrorLabel.types';
import { AlertOctagonIcon } from '../Icon';

function FormErrorLabel({ text, ...rest }: TFormErrorLabelProps): ReactElement {
  return (
    <Box flexDirection="row" alignItems="center" mt="s" pl="s" {...rest}>
      <Box alignSelf="flex-start">
        <AlertOctagonIcon width={16} height={16} iconColor="statusErrorPrimary" />
      </Box>
      <Box flex={1}>
        <Text color="statusErrorPrimary" variant="textBodySmallBold" ml="xs">
          {text}
        </Text>
      </Box>
    </Box>
  );
}

export default memo(FormErrorLabel);
