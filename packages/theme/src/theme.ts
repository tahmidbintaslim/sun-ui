import { createTheme, ThemeOptions } from '@mui/material/styles';
import { radiusScale, sunPalette } from '@smug-ui/tokens';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: sunPalette.primary.main,
      dark: sunPalette.primary.dark,
      light: sunPalette.primary.light,
    },
    secondary: {
      main: sunPalette.neutral.main,
    },
    success: {
      main: sunPalette.success.main,
    },
    warning: {
      main: sunPalette.warning.main,
    },
    error: {
      main: sunPalette.danger.main,
    },
    background: {
      default: '#ffffff',
      paper: '#ffffff',
    },
    text: {
      primary: sunPalette.neutral[900],
      secondary: sunPalette.neutral[500],
    },
  },
  shape: {
    borderRadius: radiusScale.md,
  },
  typography: {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
  },
};

export const lightTheme = createTheme(themeOptions);

// The light-theme `main` shades are too dark to read as text on dark surfaces (MUI
// uses `main` for outlined and text buttons, links and focused labels), so dark
// mode uses the lighter 500 shades.
export const darkTheme = createTheme({
  ...themeOptions,
  palette: {
    ...themeOptions.palette,
    mode: 'dark',
    primary: {
      main: sunPalette.primary[500],
      dark: sunPalette.primary[600],
      light: sunPalette.primary.light,
    },
    success: {
      main: sunPalette.success[500],
    },
    warning: {
      main: sunPalette.warning[500],
    },
    error: {
      main: sunPalette.danger[500],
    },
    background: {
      default: sunPalette.neutral[900],
      paper: sunPalette.neutral[800],
    },
    text: {
      primary: sunPalette.neutral[50],
      secondary: sunPalette.neutral[400],
    },
  },
});

export { createTheme };
