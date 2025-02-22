import styled, { css } from 'styled-components';
import {
  compose,
  color,
  variant,
  space,
  typography,
  textAlign,
  display,
  letterSpacing,
} from 'styled-system';

import { textVariants } from 'theme/variants';

import { TTextProps } from './Text.types';

export const StyledText = styled.p<Partial<TTextProps>>`
  font-family: inherit;
  word-break: break-word;
  white-space: pre-wrap;

  ${({ numberOfLines }) =>
    numberOfLines &&
    css`
      display: -webkit-box;
      -webkit-line-clamp: ${numberOfLines};
      -webkit-box-orient: vertical;
      overflow: hidden;
      line-break: anywhere;
    `}

  ${compose(
    color,
    variant({ variants: textVariants }),
    space,
    typography,
    textAlign,
    display,
    letterSpacing
  )};

  ${({ underline }) =>
    underline &&
    css`
      text-decoration: underline;
    `}
`;
