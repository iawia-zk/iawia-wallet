import { FC, ReactNode } from 'react';

import { TTextVariantKeys, TThemePrimitives, TSpacing } from 'theme/theme.types';
import { TTextProps } from 'components/core/Text/Text.types';
import { TIconProps } from 'components/core/Icon/Icon.types';

export type TButtonProps = {
  className?: string;
  labelValues?: TTextProps['values'];
  children?: ReactNode;
  labelProps?: TTextProps;
  rightIcon?: FC<TIconProps>;
  leftIcon?: FC<TIconProps>;
  variant?: TButtonVariants;
  size?: TButtonSize;
  loading?: boolean;
  block?: boolean;
  disabled?: boolean;
  onPress?: () => void;
  type?: HTMLButtonElement['type'];
};

export type TButtonVariants = 'primary' | 'secondary' | 'ghost' | 'success' | 'error';
export type TButtonStates = 'default' | 'onTap' | 'onHover' | 'disabled';
export type TButtonStyleProperties = 'background' | 'text' | 'border';

export type TButtonVariantMap = Record<TButtonVariants, TButtonStatesWithStyleProperties>;

export type TButtonStatesWithStyleProperties = Record<
  TButtonStates,
  Record<TButtonStyleProperties, keyof TThemePrimitives>
>;

export type TButtonSize = 'small' | 'medium' | 'large' | 'xLarge';
export type TButtonSizeProperty = {
  minHeight: number;
  padding: keyof TSpacing;
  iconSize: number;
  borderRadius: number;
  borderWidth: Record<TButtonVariants, number>;
  textVariant: TTextVariantKeys;
};
export type TButtonSizeMap = Record<TButtonSize, TButtonSizeProperty>;

export type TButtonGetStyleProps = {
  variant: TButtonVariants;
  loading: boolean;
  disabled?: boolean;
};
export type TButtonGetStyleReturn = Record<TButtonStyleProperties, keyof TThemePrimitives>;

export type TButtonGetSizeProps = { size: TButtonSize };

export type TStyledButtonProperties = {
  onClick?: () => void;
  disabled?: boolean;
  variant: TButtonStatesWithStyleProperties;
};
