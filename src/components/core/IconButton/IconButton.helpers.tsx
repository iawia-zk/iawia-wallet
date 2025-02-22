import {
  TIconButtonSizeProperty,
  TIconButtonGetSizeProps,
  TIconButtonGetStyleProps,
  TIconButtonGetStyleReturn,
} from './IconButton.types';
import { ICON_BUTTONS_VARIANT_STATE_MAP, ICON_BUTTON_SIZE_MAP } from './IconButton.constants';

export function getIconButtonStyle({
  variant,
  pressed = false,
  disabled = false,
  loading = false,
}: TIconButtonGetStyleProps): TIconButtonGetStyleReturn {
  const buttonStateMap = ICON_BUTTONS_VARIANT_STATE_MAP[variant];

  if (disabled || loading) {
    return buttonStateMap.disabled;
  }
  if (pressed) {
    return buttonStateMap.onTap;
  }
  return buttonStateMap.default;
}

export function getIconButtonSize({ size }: TIconButtonGetSizeProps): TIconButtonSizeProperty {
  return ICON_BUTTON_SIZE_MAP[size];
}
