import { TI18nId } from 'types/common';
import { TModalState, TPopconfirmVariant } from 'components/PopconfirmModal/PopconfirmModal.types';
import { TTextProps } from 'components/core/Text/Text.types';

export type TModalTopContentProps = {
  titleId?: TI18nId;
  titleProps?: TTextProps;
  descriptionId?: TI18nId;
  descriptionProps?: TTextProps;
} & TModalTopContentViewProps;

export type TModalTopContentViewProps = { type?: TPopconfirmVariant } & Pick<
  TModalState,
  'icon' | 'iconColor' | 'content' | 'lottie'
>;
