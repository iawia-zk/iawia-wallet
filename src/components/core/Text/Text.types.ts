import { ReactNode, CSSProperties } from 'react';
import { TransProps } from 'react-i18next';
import { TextAlignProps, SpaceProps, DisplayProps, LetterSpacingProps } from 'styled-system';

import { TI18nId } from 'types/common';
import { TTextVariantKeys, TTheme, TThemePrimitives } from 'theme/theme.types';

export type TTextProps = {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3' | 'h4' | 'div';
  textId?: TI18nId;
  children?: ReactNode;
  style?: CSSProperties;
  numberOfLines?: number;
  values?: Record<string, unknown>;
  variant?: TTextVariantKeys | Record<string, string>;
  color?: keyof TThemePrimitives;
  className?: string;
  components?: TransProps<TI18nId>['components'];
  hasTransComponents?: boolean;
  underline?: boolean;
} & TextAlignProps &
  DisplayProps &
  SpaceProps<TTheme, unknown> &
  LetterSpacingProps;
