import { css } from 'styled-components';


import { TThemePrimitives } from './theme.types';
import { getColor } from '../helpers/theme';

const shadowCss = ({
  background,
  hoverColor,
  activeColor,
  inset = 0,
}: {
  background: keyof TThemePrimitives;
  hoverColor: keyof TThemePrimitives;
  activeColor: keyof TThemePrimitives;
  inset?: string | number;
}) => css`
  transition: box-shadow 200ms cubic-bezier(0.4, 0.3, 0.8, 0.6) 0s;

  --cell-bg: ${getColor(background)};
  --cell-shadow-base: inset 0 0 0 ${inset} var(--cell-bg);
  --cell-shadow-hover: inset 0 0 0 9999px ${getColor(hoverColor)};
  --cell-shadow-active: inset 0 0 0 9999px ${getColor(activeColor)};
  --cell-shadow-collapsed: inset 0 0 0 0 rgba(255, 255, 255, 0);

  &:hover {
    box-shadow: var(--cell-shadow-collapsed), var(--cell-shadow-base), var(--cell-shadow-hover);
  }

  &:active:enabled,
  &[aria-pressed='true']:enabled,
  &[aria-selected='true']:enabled {
    box-shadow: var(--cell-shadow-collapsed), var(--cell-shadow-base), var(--cell-shadow-active);
  }
`;

export default shadowCss;
