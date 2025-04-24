import styled, { css } from 'styled-components';

import { getColor } from 'helpers/theme';

import { getListItemStateStyle } from './ListItemBase.helpers';
import { TStyletListItemBaseButtonProps } from './ListItemBase.types';

export const StyledListItemBaseButton = styled.button<TStyletListItemBaseButtonProps>`
  cursor: ${(props) => (props.onClick && !props.disabled ? 'pointer' : 'default')} !important;
  display: contents;

  .list-item-base-right-icon-active {
    display: none;
  }

  &:hover:enabled {
    ${({ disabled, hasError, onClick, isActive, labelProps, descriptionProps }) => {
      const { backgroundColor, descriptionColor, labelColor, borderRadius } = getListItemStateStyle(
        {
          disabled,
          hasError,
          hovered: true,
        }
      );

      return (
        onClick &&
        !isActive &&
        css`
          .list-item-base-container {
            background-color: ${getColor(backgroundColor)};
            border-radius: ${borderRadius}px;
          }

          .list-item-base-description {
            color: ${getColor(descriptionProps?.color ?? descriptionColor)};
          }

          .list-item-base-label {
            color: ${getColor(labelProps?.color ?? labelColor)};
          }
        `
      );
    }}
  }

  &:active:enabled,
  &[aria-pressed='true']:enabled,
  &[aria-selected='true']:enabled ${({ isActive }) => (isActive ? ', &:enabled' : '')} {
    ${({ disabled, hasError, onClick, labelProps, descriptionProps }) => {
      const { backgroundColor, descriptionColor, labelColor, borderRadius } = getListItemStateStyle(
        {
          disabled,
          hasError,
          pressed: true,
        }
      );

      return (
        onClick &&
        css`
          .list-item-base-container {
            background-color: ${getColor(backgroundColor)};
            border-radius: ${borderRadius}px;
          }

          .list-item-base-description {
            color: ${getColor(descriptionProps?.color ?? descriptionColor)};
          }

          .list-item-base-label {
            color: ${getColor(labelProps?.color ?? labelColor)};
          }

          .list-item-base-icon-container {
            background-color: ${getColor(
              hasError ? 'backgroundPrimary' : 'buttonGhostPrimaryHover'
            )};
          }

          .list-item-base-right-icon-active {
            display: block;
          }

          .list-item-base-right-icon-passive {
            display: none;
          }
        `
      );
    }}
  }
`;
