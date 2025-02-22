import { memo } from 'react';

import Text from 'components/core/Text';

import { TTextInputLabelProps } from './TextInputLabel.types';
import { InputLabel } from './TextInputLabel.styles';

function TextInputLabel({ htmlFor, text, textColor, isPositionTop }: TTextInputLabelProps) {
  return (
    <InputLabel htmlFor={htmlFor} isPositionTop={isPositionTop}>
      <Text color={textColor} variant="textBodySmall">
        {text}
      </Text>
    </InputLabel>
  );
}

export default memo(TextInputLabel);
