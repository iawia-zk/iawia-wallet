import { FC } from 'react';

import { TTextInputBaseProps } from 'components/core/TextInputBase/TextInputBase.types';
import { TIconProps } from 'components/core/Icon/Icon.types';

export type TTextInputProps = {
  rightIcon?: FC<TIconProps>;
} & Omit<TTextInputBaseProps<HTMLInputElement>, 'rightComponent' | 'variant' | 'height'>;
