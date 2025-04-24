import { LIST_ITEM_BASE_STATE_MAP } from './ListItemBase.constants';
import { TListItemBaseStates } from './ListItemBase.types';

function getListItemStateStyle({
  hasError,
  disabled,
  pressed = false,
  hovered = false,
}: TListItemBaseStates) {
  if (hasError) {
    return LIST_ITEM_BASE_STATE_MAP.error;
  }
  if (disabled) {
    return LIST_ITEM_BASE_STATE_MAP.disabled;
  }
  if (pressed) {
    return LIST_ITEM_BASE_STATE_MAP.onTap;
  }
  if (hovered) {
    return LIST_ITEM_BASE_STATE_MAP.hover;
  }
  return LIST_ITEM_BASE_STATE_MAP.default;
}

export { getListItemStateStyle };
