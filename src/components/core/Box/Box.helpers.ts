import { css } from 'styled-components';
import { has } from 'lodash/fp';

import { TSpacing } from 'theme/theme.types';
import { getSpacing, media } from 'helpers/theme';

// TODO: (melih) find the type
export function getGapResponsiveMappingCss(value: any) {
  return css`
    ${typeof value === 'string' &&
    css`
      gap: ${getSpacing(value as keyof TSpacing)};
    `}
    ${has('_', value) &&
    css`
      gap: ${getSpacing(value._)};
    `}
    ${has('s', value) &&
    css`
      ${media.s} {
        gap: ${getSpacing(value.s)};
      }
    `}
    ${has('m', value) &&
    css`
      ${media.m} {
        gap: ${getSpacing(value.m)};
      }
    `}
    ${has('l', value) &&
    css`
      ${media.l} {
        gap: ${getSpacing(value.l)};
      }
    `}
    ${has('xl', value) &&
    css`
      ${media.xl} {
        gap: ${getSpacing(value.xl)};
      }
    `}
  `;
}
