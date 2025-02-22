import { TThemePrimitives } from 'theme/theme.types';

import {
  TGetBackgroundColorParams,
  TGetBorderColorParams,
  TGetCaretColorParams,
  TGetInputColorParams,
  TGetLabelColorParams,
} from './TextInputBase.types';

export function getBackgroundColor({
  hasError,
  isFocused,
  editable,
}: TGetBackgroundColorParams): keyof TThemePrimitives {
  if (!editable) {
    return 'backgroundSecondary';
  }
  if (hasError) {
    return 'statusErrorGhost';
  }
  if (isFocused) {
    return 'backgroundTertiary';
  }
  return 'backgroundSecondary';
}

export function getBorderColor({
  hasError,
  isFocused,
  editable,
}: TGetBorderColorParams): keyof TThemePrimitives {
  if (!editable) {
    return 'transparent';
  }
  if (hasError) {
    return 'statusErrorPrimary';
  }
  if (isFocused) {
    return 'borderOutlineActive';
  }
  return 'transparent';
}

export function getLabelColor({
  hasError,
  isFocused,
  editable,
}: TGetLabelColorParams): keyof TThemePrimitives {
  if (!editable) {
    return 'textPassive';
  }
  if (hasError) {
    return 'statusErrorPrimary';
  }
  if (isFocused) {
    return 'textActive';
  }
  return 'textPrimary';
}

export function getInputColor({ editable }: TGetInputColorParams): keyof TThemePrimitives {
  if (!editable) {
    return 'textPassive';
  }

  return 'textPrimary';
}

export function getCaretColor({ hasError }: TGetCaretColorParams): keyof TThemePrimitives {
  if (hasError) {
    return 'statusErrorPrimary';
  }
  return 'textActive';
}
