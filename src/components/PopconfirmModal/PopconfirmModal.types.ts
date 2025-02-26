import { FC, ReactNode } from 'react';

import { TTextProps } from 'components/core/Text/Text.types';
import { TButtonProps } from 'components/core/Button/Button.types';
import { TI18nId } from 'types/common';
import { TIconProps } from 'components/core/Icon/Icon.types';
import { TLottieViewProps } from 'components/core/LottieView/LottieView.types';

export type TPopconfirmModalRef = {
  show: (state: TModalState) => void;
  hide: () => void;
};

export type TModalState = {
  variant?: TPopconfirmVariant;
  type?: TPopconfirmVariant;
  icon?: FC<TIconProps>;
  iconColor?: TIconProps['iconColor'];
  lottie?: TLottieViewProps['source'];
  content?: ReactNode;
  titleId: TI18nId;
  titleProps?: TTextProps;
  descriptionId?: TI18nId;
  descriptionProps?: TTextProps;
  confirmButtonId?: TI18nId;
  confirmButtonProps?: Omit<TButtonProps, 'onPress'>;
  onConfirm?: () => Promise<void> | void;
  showCancel?: boolean;
  cancelButtonId?: TI18nId;
  cancelButtonProps?: Omit<TButtonProps, 'onPress'>;
  onCancel?: () => void;
  onDismiss?: () => void;
};

export type TPopconfirmVariant = 'danger' | 'default';

export type TPopconfirmButtonsProps = { type: TPopconfirmVariant; hideModal: () => void } & Pick<
  TModalState,
  | 'confirmButtonId'
  | 'confirmButtonProps'
  | 'onConfirm'
  | 'showCancel'
  | 'cancelButtonId'
  | 'cancelButtonProps'
  | 'onCancel'
>;
