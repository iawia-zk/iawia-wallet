import { createContext, ReactElement, useContext, useState, useMemo, useCallback } from 'react';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';

import Theme from 'enums/Theme';
import { TChildrenOnly } from 'types/common';
import { darkTheme } from 'theme';
import storage, { STORAGE_KEYS } from 'helpers/storage';

import { TThemeContext, TThemeState } from './ThemeProvider.types';
import { INITIAL_DISPATCH, INITIAL_STATE } from './ThemeProvider.constants';
import { GlobalStyle } from './ThemeProvider.styles';

const themeContext = createContext<TThemeContext>({
  themeState: INITIAL_STATE,
  themeDispatch: INITIAL_DISPATCH,
});

export const ThemeProvider = ({ children }: TChildrenOnly): ReactElement => {
  const [{ theme }, setState] = useState<TThemeState>(INITIAL_STATE);

  /*
  function getTheme(): TTheme {
    if (theme === Theme.SYSTEM) {
      return isSystemDark ? darkTheme : lightTheme;
    }

    return theme === Theme.LIGHT ? lightTheme : darkTheme;
  }
    */

  const changeTheme = useCallback(
    (theme: Theme) => {
      storage.writeStorage(STORAGE_KEYS.THEME, theme);
      setState({ theme });
    },
    [theme]
  );

  const value = useMemo(
    (): TThemeContext => ({
      themeState: { theme },
      themeDispatch: { changeTheme },
    }),
    [theme, changeTheme]
  );

  return (
    <themeContext.Provider value={value}>
      <StyledComponentProvider theme={darkTheme}>
        <>
          <GlobalStyle />
          {children}
        </>
      </StyledComponentProvider>
    </themeContext.Provider>
  );
};

export const useThemeContext = (): TThemeContext => useContext(themeContext);
