import { createTheme, ThemeOptions } from '@mui/material/styles';
import { radiusScale, sunPalette } from '@sun-ui/tokens';

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
        fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", "Helvetica Neue", sans-serif',
    },
};

export const lightTheme = createTheme(themeOptions);

export const darkTheme = createTheme({
    ...themeOptions,
    palette: {
        ...themeOptions.palette,
        mode: 'dark',
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
