import { ReactNode } from 'react';
import { Transition } from 'framer-motion';

import ZIndex from 'constants/zIndex';
import { TSpacing, TThemePrimitives } from 'theme/theme.types';

export type TModalProps = {
  rootId?: string;
  children: ReactNode;
  afterOpen?: () => void;
  afterClose?: () => void;
  zIndex?: ZIndex;
  isFullPage?: boolean;
  transparent?: boolean;
  outsideClosable?: boolean;
  layout?: Layout;
  transition?: Transition;
  maxHeight?: string;
  height?: string;
  backgroundColor?: keyof TThemePrimitives;
  pt?: keyof TSpacing;
};

export type TModalRef = {
  show: () => void;
  hide: () => void;
};

export type Layout = 'modal' | 'pageModal';

export type TModalLayoutProps = {
  layout: Layout;
  children: ReactNode;
  transparent: boolean;
  maxHeight?: string;
  height?: string;
  backgroundColor: keyof TThemePrimitives;
  pt?: keyof TSpacing | Record<string, keyof TSpacing>;
};

export type TUseModalCloseParams = {
  visible: boolean;
  onClose?: () => void;
};
