import { TIconButtonSizeMap, TIconButtonVariantMap } from './IconButton.types';

export const ICON_BUTTONS_VARIANT_STATE_MAP: TIconButtonVariantMap = {
  primary: {
    default: {
      background: 'buttonPrimary',
      border: 'buttonPrimary',
      text: 'textInverted',
    },
    disabled: {
      background: 'backgroundSecondary',
      border: 'backgroundSecondary',
      text: 'textPassive',
    },
    onTap: {
      background: 'buttonPrimaryOnTap',
      border: 'buttonPrimaryOnTap',
      text: 'textInverted',
    },
  },
  secondary: {
    default: {
      background: 'transparent',
      border: 'textSecondary',
      text: 'textSecondary',
    },
    disabled: {
      background: 'transparent',
      border: 'textPassive',
      text: 'textPassive',
    },
    onTap: {
      background: 'transparent',
      border: 'buttonPrimaryOnTap',
      text: 'buttonPrimaryOnTap',
    },
  },
  ghost: {
    default: {
      background: 'buttonGhostPrimary',
      border: 'buttonGhostPrimary',
      text: 'buttonPrimary',
    },
    disabled: {
      background: 'backgroundSecondary',
      border: 'backgroundSecondary',
      text: 'textPassive',
    },
    onTap: {
      background: 'buttonGhostPrimary',
      border: 'buttonGhostPrimary',
      text: 'buttonPrimaryOnTap',
    },
  },
  success: {
    default: {
      background: 'statusPositiveGhost',
      border: 'statusPositiveGhost',
      text: 'statusPositivePrimary',
    },
    disabled: {
      background: 'backgroundSecondary',
      border: 'backgroundSecondary',
      text: 'textPassive',
    },
    onTap: {
      background: 'statusPositiveGhost',
      border: 'statusPositiveGhost',
      text: 'statusPositivePrimaryOnTap',
    },
  },
  error: {
    default: {
      background: 'statusErrorGhost',
      border: 'statusErrorGhost',
      text: 'statusErrorPrimary',
    },
    disabled: {
      background: 'backgroundSecondary',
      border: 'backgroundSecondary',
      text: 'textPassive',
    },
    onTap: {
      background: 'statusErrorGhost',
      border: 'statusErrorGhost',
      text: 'statusErrorPrimaryOnTap',
    },
  },
};

export const ICON_BUTTON_SIZE_MAP: TIconButtonSizeMap = {
  small: {
    iconBoxSize: 24,
    iconSize: 16,
    borderRadius: 32,
  },
  medium: {
    iconBoxSize: 32,
    iconSize: 24,
    borderRadius: 32,
  },
  mediumLarge: {
    iconBoxSize: 40,
    iconSize: 24,
    borderRadius: 40,
  },
  large: {
    iconBoxSize: 48,
    iconSize: 24,
    borderRadius: 48,
  },
  xLarge: {
    iconBoxSize: 56,
    iconSize: 32,
    borderRadius: 32,
  },
};
