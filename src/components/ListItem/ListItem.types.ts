import { FC } from 'react';

import { TListItemBaseProps } from 'components/core/ListItemBase/ListItemBase.types';
import { TSpacing, TThemePrimitives } from 'theme/theme.types';
import { TIconBoxProps } from 'components/core/IconBox/IconBox.types';
import { TIconBaseProps } from 'components/core/Icon/Icon.types';

export type TListItemProps = Pick<
  TListItemBaseProps,
  | 'labelId'
  | 'descriptionId'
  | 'labelProps'
  | 'descriptionProps'
  | 'onPress'
  | 'disabled'
  | 'hasError'
  | 'minHeight'
> & {
  leftIcon?: FC<TIconBaseProps>;
  rightIcon?: FC<TIconBaseProps>;
  iconColor?: keyof TThemePrimitives;
  iconBackgroundColor?: keyof TThemePrimitives;
  iconBoxProps?: Omit<TIconBoxProps, 'icon'>;
};

export type TListItemShimmerProps = {
  count?: number;
  gap?: keyof TSpacing;
  hasDescription?: boolean;
  hasLeftIcon?: boolean;
  hasRightIcon?: boolean;
};
