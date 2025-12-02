import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import type { Preview } from '@storybook/react-vite';
import { lightTheme } from '@sun-ui/theme';

const preview: Preview = {
    parameters: {
        actions: { argTypesRegex: '^on[A-Z].*' },
        controls: {
            matchers: {
                color: /(background|color)$/i,
                date: /Date$/i,
            },
        },
    },
    decorators: [
        (Story) => (
            <ThemeProvider theme={lightTheme}>
                <CssBaseline />
                <Story />
            </ThemeProvider>
        ),
    ],
};

export default preview;
