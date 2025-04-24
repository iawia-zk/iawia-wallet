import { ReactElement, ReactNode } from 'react';

import { TTextProps } from 'components/core/Text/Text.types';
import { TBoxProps } from 'components/core/Box/Box.types';
import { TSpacing, TThemePrimitives } from 'theme/theme.types';
import { TI18nId } from 'types/common';

export type TListItemBaseProps = {
  labelId: TI18nId;
  descriptionId?: TI18nId;
  labelProps?: TTextProps;
  containerProps?: Omit<TBoxProps, 'minHeight' | 'display' | 'width'>;
  descriptionProps?: TTextProps;
  left?: ReactNode | ((states: TListItemBaseStates) => ReactElement | undefined);
  right?: ReactNode | ((states: TListItemBaseStates) => ReactElement | undefined);
  onPress?: () => void;
  disabled?: boolean;
  hasArrow?: boolean;
  marginTop?: keyof TSpacing;
  marginBottom?: keyof TSpacing;
  minHeight?: number;
  hasError?: boolean;
  isActive?: boolean;
};

export type TListItemBaseStates = {
  disabled?: boolean;
  pressed?: boolean;
  hovered?: boolean;
  hasError?: boolean;
};

export type TListItemBaseState = 'onTap' | 'hover' | 'disabled' | 'error' | 'default';
export type TListItemBaseStateMap = Record<
  TListItemBaseState,
  {
    labelColor: keyof TThemePrimitives;
    descriptionColor: keyof TThemePrimitives;
    backgroundColor: keyof TThemePrimitives;
    borderRadius: number;
  }
>;

export type TStyletListItemBaseButtonProps = {
  disabled: boolean;
  hasError: boolean;
  isActive: boolean;
  labelProps?: TTextProps;
  descriptionProps?: TTextProps;
};
