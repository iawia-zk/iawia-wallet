import { ReactNode } from 'react';

import { TBoxProps } from 'components/core/Box/Box.types';

export type TBottomInsetBoxProps = {
  children: ReactNode;
  sticky?: boolean;
  className?: string;
} & TBoxProps;
