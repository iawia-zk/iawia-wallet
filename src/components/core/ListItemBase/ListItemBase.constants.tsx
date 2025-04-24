import { TListItemBaseStateMap } from './ListItemBase.types';

export const LIST_ITEM_BASE_MIN_HEIGHT = 12;
export const LIST_ITEM_STATE_BORDER_RADIUS = 12;

export const LIST_ITEM_BASE_STATE_MAP: TListItemBaseStateMap = {
  onTap: {
    backgroundColor: 'buttonGhostPrimary',
    labelColor: 'textPrimary',
    descriptionColor: 'textSecondary',
    borderRadius: LIST_ITEM_STATE_BORDER_RADIUS,
  },
  disabled: {
    backgroundColor: 'transparent',
    labelColor: 'textPassive',
    descriptionColor: 'textPassive',
    borderRadius: 0,
  },
  hover: {
    backgroundColor: 'backgroundTertiaryHover',
    labelColor: 'textPrimary',
    descriptionColor: 'textSecondary',
    borderRadius: LIST_ITEM_STATE_BORDER_RADIUS,
  },
  error: {
    backgroundColor: 'transparent',
    labelColor: 'statusErrorPrimary',
    descriptionColor: 'statusErrorPrimary',
    borderRadius: 0,
  },
  default: {
    backgroundColor: 'transparent',
    labelColor: 'textPrimary',
    descriptionColor: 'textSecondary',
    borderRadius: 0,
  },
};
