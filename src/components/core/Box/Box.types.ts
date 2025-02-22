import { ReactNode } from 'react';
import { Property } from 'csstype';
import {
  ColorProps,
  SpaceProps,
  LayoutProps,
  FlexboxProps,
  BorderProps,
  PositionProps,
  GridProps,
  ShadowProps,
  ColorStyleProps,
} from 'styled-system';

import { TSpacing, TTheme } from 'theme/theme.types';

export type TStyledBoxProps = ColorProps<TTheme> &
  SpaceProps<TTheme, unknown> &
  (LayoutProps<TTheme> | ExtraLayoutProps) &
  FlexboxProps<TTheme> &
  Omit<BorderProps<TTheme>, 'borderRadius' | 'borderWidth'> &
  PositionProps<TTheme> &
  ShadowProps<TTheme> &
  GridProps<TTheme> &
  ColorStyleProps<TTheme> &
  TStyledBoxExtraProps;

export type TStyledBoxExtraProps = {
  borderRadius?: number | string;
  borderWidth?: number | string;
  gap?: keyof TSpacing | Record<string, unknown>;
  pointerEvents?: Property.PointerEvents;
};

export type TBoxProps = TStyledBoxProps & {
  id?: string;
  children?: ReactNode;
  className?: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  style?: Record<string, any>;
};

type ExtraLayoutProps = {
  display?: string | Record<string, unknown>;
  width?: Record<string, unknown> | string | number;
  flexDirection?: Property.FlexDirection | Record<string, unknown>;
  minHeight?: Property.MinHeight | Record<string, unknown>;
  borderBottomRightRadius?: Property.BorderRadius | Record<string, unknown>;
  borderBottomLeftRadius?: Property.BorderRadius | Record<string, unknown>;
};
