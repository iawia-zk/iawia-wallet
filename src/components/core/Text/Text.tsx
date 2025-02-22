import { memo, ReactElement } from 'react';

import { TTextProps } from './Text.types';
import { StyledText } from './Text.styles';

function Text({
  as = 'p',
  children,
  values,
  variant = 'textBody',
  color = 'textPrimary',
  hasTransComponents = true,
  underline = false,
  ...rest
}: TTextProps): ReactElement {
  return (
    <StyledText as={as} variant={variant} color={color} underline={underline} {...rest}>
      {children}
    </StyledText>
  );
}

export default memo(Text);
