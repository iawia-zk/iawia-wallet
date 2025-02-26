import { FC } from 'react';

import { TTextProps } from 'components/core/Text/Text.types';
import { TButtonProps } from 'components/core/Button/Button.types';
import { TIconProps } from 'components/core/Icon/Icon.types';
import { TI18nId } from 'types/common';

export type TAlertModalRef = {
  show: (state: TModalState) => void;
  hide: () => void;
};

export type TModalState = {
  variant: TAlertModalVariant;
  icon?: FC<TIconProps>;
  iconColor?: TIconProps['iconColor'];
  titleId: TI18nId;
  titleProps?: TTextProps;
  descriptionId?: TI18nId;
  descriptionProps?: TTextProps;
  onDismiss?: () => void;
  buttons?: TButtonProps[];
};

export type TAlertModalVariant = 'error' | 'success';
