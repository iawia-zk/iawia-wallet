import { memo, ReactElement } from 'react';
import { Trans } from 'react-i18next';

import { TI18nId } from 'types/common';

import { TTextProps } from './Text.types';
import { StyledText } from './Text.styles';

function Text({
  textId,
  as = 'p',
  children,
  values,
  variant = 'textBody',
  color = 'textPrimary',
  components,
  hasTransComponents = true,
  underline = false,
  ...rest
}: TTextProps): ReactElement {
  return (
    <StyledText as={as} variant={variant} color={color} underline={underline} {...rest}>
      {textId && (
        <Trans<TI18nId>
          i18nKey={textId}
          values={values}
          {...(hasTransComponents && {
            components: {
              b: <b />,
              u: <u />,
              s: <s />,
              ...components,
            },
          })}
        />
      )}
      {children}
    </StyledText>
  );
}

export default memo(Text);
