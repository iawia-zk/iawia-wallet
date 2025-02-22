import {
  createContext,
  ReactElement,
  useContext,
  useState,
  useMemo,
  useCallback,
  useEffect,
} from 'react';
import { ThemeProvider as StyledComponentProvider } from 'styled-components';

import Theme, { getThemeValueByThemeString } from 'enums/Theme';
import { TChildrenOnly } from 'types/common';
import { lightTheme, darkTheme } from 'theme';
import { TTheme } from 'theme/theme.types';
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
  const [isSystemDark, setIsSystemDark] = useState(
    window.matchMedia('(prefers-color-scheme: dark)').matches
  );

  function getTheme(): TTheme {
    if (theme === Theme.SYSTEM) {
      return isSystemDark ? darkTheme : lightTheme;
    }

    return theme === Theme.LIGHT ? lightTheme : darkTheme;
  }

  useEffect(() => {
    getSelectedTheme();

    function handleSystemThemeChange(event: MediaQueryListEvent) {
      setIsSystemDark(event.matches);
    }

    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    mediaQuery.addEventListener('change', handleSystemThemeChange);

    return () => {
      mediaQuery.removeEventListener('change', handleSystemThemeChange);
    };
  }, []);

  async function getSelectedTheme() {
    const themeValue = getThemeValueByThemeString(storage.readStorage(STORAGE_KEYS.THEME));
    setState({ theme: themeValue });
  }

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
      <StyledComponentProvider theme={getTheme()}>
        <>
          <GlobalStyle />
          {children}
        </>
      </StyledComponentProvider>
    </themeContext.Provider>
  );
};

export const useThemeContext = (): TThemeContext => useContext(themeContext);
