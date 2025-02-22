import Theme from 'enums/Theme';

export type TThemeContext = {
  themeState: TThemeState;
  themeDispatch: TThemeDispatch;
};

export type TThemeState = { theme: Theme };

export type TThemeDispatch = { changeTheme: (theme: Theme) => void };
