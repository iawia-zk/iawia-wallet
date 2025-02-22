import lightThemePrimitives from './lightThemePrimitives';
import darkThemePrimitives from './darkThemePrimitives';

import spacing from './spacing';
import { TTheme, TThemePrimitives } from './theme.types';
import breakpoints from './breakpoints';
import borderRadius from './borderRadius';
import { textVariants } from './variants';

function createTheme(themePrimitives: TThemePrimitives): TTheme {
  return {
    colors: themePrimitives,
    space: spacing,
    breakpoints,
    borderRadius,
    textVariants,
  };
}

export const lightTheme = createTheme(lightThemePrimitives);

export const darkTheme = createTheme(darkThemePrimitives);
