import { ReactNode } from 'react';

import { TButtonProps } from 'components/core/Button/Button.types';
import { TModalTopContentProps } from 'components/ModalTopContent/ModalTopContent.types';

export type TModalLayoutProps = {
  topContent?: ReactNode;
  bottomContent?: ReactNode;
  buttons?: TButtonProps[];
} & Omit<TModalTopContentProps, 'content'>;
