import { FC } from 'react';

import { TBoxProps } from 'components/core/Box/Box.types';
import { TThemePrimitives } from 'theme/theme.types';
import { TIconBaseProps } from '../Icon/Icon.types';

export type TIconBoxProps = {
  variant?: TIconBoxVariant;
  containerSize?: TIconContainerSize;
  iconSize?: TIconSize;
  containerProps?: Omit<TBoxProps, 'minHeight' | 'display' | 'width'>;
  icon: FC<TIconBaseProps>;
  backgroundColor?: keyof TThemePrimitives;
  iconColor?: keyof TThemePrimitives;
  iconProps?: TIconBaseProps;
  loading?: boolean;
  outline?: boolean;
  className?: string;
};

export type TIconContainerSize = 'xSmall' | 'small' | 'medium' | 'large';
export type TIconSize = 'xSmall' | 'small' | 'medium' | 'large';
export type TIconBoxVariant = 'circle' | 'square';

export type TIconContainerSizeMap = Record<TIconContainerSize, TSizeProperty>;
export type TIconSizeMap = Record<TIconSize, TSizeProperty>;

export type RadioShimmerProps = {
  variant?: TIconBoxVariant;
  size?: TIconContainerSize;
};

export type TSizeProperty = {
  size: number;
};
