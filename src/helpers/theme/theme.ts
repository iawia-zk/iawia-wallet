import { styleFn } from 'styled-system';
import { TBorderRadius, TSpacing, TTheme, TThemePrimitives } from 'theme/theme.types';

function getColor(name: keyof TThemePrimitives): styleFn {
  return ({ theme }: { theme: TTheme }) => theme.colors[name];
}

function getSpacing(space: keyof TSpacing): styleFn {
  return ({ theme }: { theme: TTheme }) => theme.space[space];
}

function getBorderRadius(borderRadius: keyof TBorderRadius): styleFn {
  return ({ theme }: { theme: TTheme }) => theme.borderRadius[borderRadius];
}

export { getColor, getSpacing, getBorderRadius };
