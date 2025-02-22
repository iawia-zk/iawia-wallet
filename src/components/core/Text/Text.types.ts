import { ReactNode, CSSProperties } from 'react';
import { TextAlignProps, SpaceProps, DisplayProps, LetterSpacingProps } from 'styled-system';

import { TTextVariantKeys, TTheme, TThemePrimitives } from 'theme/theme.types';

export type TTextProps = {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  children?: ReactNode;
  style?: CSSProperties;
  numberOfLines?: number;
  values?: Record<string, unknown>;
  variant?: TTextVariantKeys | Record<string, string>;
  color?: keyof TThemePrimitives;
  className?: string;
  hasTransComponents?: boolean;
  underline?: boolean;
} & TextAlignProps &
  DisplayProps &
  SpaceProps<TTheme, unknown> &
  LetterSpacingProps;
