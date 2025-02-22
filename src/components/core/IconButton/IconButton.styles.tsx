import styled, { css } from 'styled-components';

import { getColor } from 'helpers/theme';

import { TStyledIconButtonProps } from './IconButton.types';
import { getIconButtonStyle } from './IconButton.helpers';

export const StyledIconButton = styled.button<TStyledIconButtonProps>`
  cursor: ${(props) => (props.onClick && !props.disabled ? 'pointer' : 'default')} !important;
  display: contents;

  &:active:enabled,
  &[aria-pressed='true']:enabled,
  &[aria-selected='true']:enabled {
    ${({ disabled, loading, variant }) => {
      const iconButtonStyle = getIconButtonStyle({ variant, disabled, loading, pressed: true });
      return css`
        .icon-button-container {
          border-color: ${getColor(iconButtonStyle.border)};
          background-color: ${getColor(iconButtonStyle.background)};
        }

        .icon-button-container svg path {
          stroke: ${getColor(iconButtonStyle.text)};
        }

        .icon-button-text {
          color: ${getColor(iconButtonStyle.text)};
        }
      `;
    }} 
`;
