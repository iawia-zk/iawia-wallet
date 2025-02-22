import { BaseSyntheticEvent, ReactNode } from 'react';

import { TButtonProps } from 'components/core/Button/Button.types';
import { TSpacing, TThemePrimitives } from 'theme/theme.types';

export type TBaseFormProps = {
  children: ReactNode;
  onSubmit?: (e?: BaseSyntheticEvent) => Promise<void> | void;
  submitButtonLabel?: string;
  submitButtonProps?: Omit<TButtonProps, 'labelId' | 'onPress'>;
  extraButtonContent?: ReactNode;
  isSubmitButtonVisible?: boolean;
  paddingTop?: keyof TSpacing | Record<string, keyof TSpacing>;
  buttonStickyContent?: ReactNode;
  buttonBottomContent?: ReactNode;
  backgroundColor?: keyof TThemePrimitives;
};
