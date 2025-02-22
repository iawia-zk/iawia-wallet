import { TButtonSizeMap, TButtonVariantMap } from './Button.types';

export const BUTTONS_VARIANT_STATE_MAP: TButtonVariantMap = {
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
    onHover: {
      background: 'buttonPrimaryHover',
      border: 'buttonPrimaryHover',
      text: 'textInverted',
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
    onHover: {
      background: 'transparent',
      border: 'buttonPrimaryHover',
      text: 'buttonPrimaryHover',
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
    onHover: {
      background: 'buttonGhostPrimary',
      border: 'buttonGhostPrimary',
      text: 'buttonPrimaryHover',
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
    onHover: {
      background: 'statusPositiveGhost',
      border: 'statusPositiveGhost',
      text: 'statusPositivePrimaryHover',
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
    onHover: {
      background: 'statusErrorGhost',
      border: 'statusErrorGhost',
      text: 'statusErrorPrimaryHover',
    },
    onTap: {
      background: 'statusErrorGhost',
      border: 'statusErrorGhost',
      text: 'statusErrorPrimaryOnTap',
    },
  },
};

export const BUTTON_SIZE_MAP: TButtonSizeMap = {
  small: {
    minHeight: 40,
    padding: 's',
    iconSize: 24,
    borderRadius: 32,
    borderWidth: {
      primary: 0,
      secondary: 1,
      ghost: 0,
      error: 0,
      success: 0,
    },
    textVariant: 'textBodySubBold',
  },
  medium: {
    minHeight: 48,
    padding: 'sm',
    iconSize: 24,
    borderRadius: 32,
    borderWidth: {
      primary: 0,
      secondary: 1,
      ghost: 0,
      error: 0,
      success: 0,
    },
    textVariant: 'textBodySubBold',
  },
  large: {
    minHeight: 56,
    padding: 'sm',
    iconSize: 32,
    borderRadius: 32,
    borderWidth: {
      primary: 0,
      secondary: 1,
      ghost: 0,
      error: 0,
      success: 0,
    },
    textVariant: 'textBodyBold',
  },
  xLarge: {
    minHeight: 64,
    padding: 'm',
    iconSize: 32,
    borderRadius: 32,
    borderWidth: {
      primary: 0,
      secondary: 1,
      ghost: 0,
      error: 0,
      success: 0,
    },
    textVariant: 'titleSection',
  },
};
