import { FC } from 'react';

import { TThemePrimitives } from 'theme/theme.types';
import { TIconProps } from '../Icon/Icon.types';

export type TIconButtonProps = {
  icon: FC<TIconProps>;
  variant?: TIconButtonVariants;
  size?: TIconButtonSize;
  loading?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  className?: string;
};

export type TIconButtonVariants = 'primary' | 'secondary' | 'ghost' | 'success' | 'error';
export type TIconButtonStates = 'default' | 'onTap' | 'disabled';
export type TIconButtonStyleProperties = 'background' | 'text' | 'border';

export type TIconButtonVariantMap = Record<
  TIconButtonVariants,
  Record<TIconButtonStates, Record<TIconButtonStyleProperties, keyof TThemePrimitives>>
>;

export type TIconButtonSize = 'small' | 'medium' | 'mediumLarge' | 'large' | 'xLarge';
export type TIconButtonSizeProperty = {
  iconBoxSize: number;
  iconSize: number;
  borderRadius: number;
};
export type TIconButtonSizeMap = Record<TIconButtonSize, TIconButtonSizeProperty>;

export type TIconButtonGetStyleProps = {
  variant: TIconButtonVariants;
  loading?: boolean;
  pressed?: boolean;
  disabled?: TIconButtonProps['disabled'];
};
export type TIconButtonGetStyleReturn = Record<TIconButtonStyleProperties, keyof TThemePrimitives>;

export type TIconButtonGetSizeProps = { size: TIconButtonSize };

export type TStyledIconButtonProps = {
  loading?: boolean;
  variant: TIconButtonVariants;
};
