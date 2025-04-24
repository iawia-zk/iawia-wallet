import { FC, ReactNode } from 'react';

import { TTextVariantKeys, TThemePrimitives } from 'theme/theme.types';
import { TIconProps } from '../Icon/Icon.types';

export type TAvatarProps = {
  badgeProps?: TAvatarBadgeProps;
} & TAvatarBaseProps;

export type TAvatarBadgeProps = Omit<TAvatarBaseProps, 'label' | 'children'>;
export type TAvatarImageProps = {
  size: number;
  borderRadius: number;
  uri: string;
  resizeMode?: string;
};
export type TAvatarBaseProps = {
  label?: string;
  labelColor?: keyof TThemePrimitives;
  imageUrl?: string;
  icon?: FC<TIconProps>;
  iconVectorEffect?: string;
  iconStrokeWidth?: number;
  iconColor?: keyof TThemePrimitives;
  themeIconColor?: keyof TThemePrimitives;
  size?: TAvatarSize;
  backgroundColor?: keyof TThemePrimitives;
  borderColor?: keyof TThemePrimitives;
  children?: ReactNode;
  cover?: boolean;
  largeLabel?: boolean;
  imageResizeMode?: TAvatarImageProps['resizeMode'];
  labelVariant?: TTextVariantKeys | Record<string, string>;
};

export type TAvatarSize = 'small' | 'medium' | 'large' | 'badge' | 'currencyBadge';
export type TAvatarSizeProperty = {
  size: number;
  iconSize: number;
  imageSize: number;
  borderRadius: number;
};
export type TAvatarSizeMap = Record<TAvatarSize, TAvatarSizeProperty>;

export type TAvatarGetSizeProps = { size: TAvatarSize };

export type TAvatarShimmerProps = {
  size?: TAvatarSize;
};
