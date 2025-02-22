
enum Theme {
  LIGHT = 'light',
  DARK = 'dark',
  SYSTEM = 'system',
}

const MAP: Record<
  Theme,
  {
    label: string;
  }
> = {
  [Theme.LIGHT]: {
    label: 'Light',
  },
  [Theme.DARK]: {
    label: 'Dark',
  },
  [Theme.SYSTEM]: {
    label: 'System',
  },
};

export function getLabelIdByTheme(theme: Theme) {
  return MAP[theme].label;
}

export function getThemeValueByThemeString(themeString: string | null) {
  if (themeString && Object.values<string>(Theme).includes(themeString)) {
    return themeString as Theme;
  }

  return Theme.LIGHT;
}

export default Theme;
