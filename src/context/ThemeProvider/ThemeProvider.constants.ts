import { NOOP } from 'constants/noop';
import Theme from 'enums/Theme';
import { TThemeState, TThemeDispatch } from './ThemeProvider.types';

export const INITIAL_STATE: TThemeState = {
  theme: Theme.LIGHT,
};

export const INITIAL_DISPATCH: TThemeDispatch = {
  changeTheme: NOOP,
};
