import styled, { css } from 'styled-components';

import { getColor } from 'helpers/theme';

import { TStyledButtonProperties } from './Button.types';

export const StyledButton = styled.button<TStyledButtonProperties>`
  display: contents;
  cursor: ${(props) => (props.onClick || !props.disabled ? 'pointer' : 'auto')};
  transition: all 200ms cubic-bezier(0.4, 0.3, 0.8, 0.6) 0s;

  &:hover:enabled {
    ${({ variant }) => css`
      > div {
        background-color: ${getColor(variant.onHover.background)};
        border-color: ${getColor(variant.onHover.border)};

        span {
          color: ${getColor(variant.onHover.text)};
        }

        svg path {
          stroke: ${getColor(variant.onHover.text)};
        }
      }
    `}
  }

  &:active:enabled,
  &[aria-pressed='true']:enabled,
  &[aria-selected='true']:enabled {
    ${({ variant }) => css`
      > div {
        background-color: ${getColor(variant.onTap.background)};
        border-color: ${getColor(variant.onTap.border)};

        span {
          color: ${getColor(variant.onTap.text)};
        }

        svg path {
          stroke: ${getColor(variant.onTap.text)};
        }
      }
    `}
`;
