import {
  TButtonSizeProperty,
  TButtonGetSizeProps,
  TButtonGetStyleProps,
  TButtonGetStyleReturn,
} from './Button.types';
import { BUTTONS_VARIANT_STATE_MAP, BUTTON_SIZE_MAP } from './Button.constants';

export function getButtonStyle({
  variant,
  disabled,
  loading,
}: TButtonGetStyleProps): TButtonGetStyleReturn {
  const buttonStateMap = BUTTONS_VARIANT_STATE_MAP[variant];

  if (disabled || loading) {
    return buttonStateMap.disabled;
  }

  return buttonStateMap.default;
}

export function getButtonSize({ size }: TButtonGetSizeProps): TButtonSizeProperty {
  return BUTTON_SIZE_MAP[size];
}
