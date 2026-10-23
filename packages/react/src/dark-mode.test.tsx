import { createTheme, ThemeProvider } from '@mui/material/styles';
import { colorScaleForMode } from '@smug-ui/tokens';
import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';

import { Button } from './Button';
import { Chip } from './Chip';
import { Tabs } from './Tabs';

// The light-theme `main` shades are dark enough for white surfaces but too dark for
// dark ones, so components must pick their scale by mode. These tests render in both
// modes and compare the text color with the scale for that mode.
const lightTheme = createTheme({ palette: { mode: 'light' } });
const darkTheme = createTheme({ palette: { mode: 'dark' } });

function rgb(hex: string): string {
  const n = hex.replace('#', '');
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16));
  return `rgb(${r}, ${g}, ${b})`;
}

describe.each([
  ['light', lightTheme, false],
  ['dark', darkTheme, true],
] as const)('%s mode', (_mode, theme, isDark) => {
  const primary = colorScaleForMode('primary', isDark);

  it('outlined Button text uses the main shade for the mode', () => {
    render(
      <ThemeProvider theme={theme}>
        <Button variant="outlined" color="primary">
          Save
        </Button>
      </ThemeProvider>
    );
    expect(getComputedStyle(screen.getByRole('button', { name: 'Save' })).color).toBe(
      rgb(primary.main)
    );
  });

  it('outlined Chip text uses the main shade for the mode', () => {
    render(
      <ThemeProvider theme={theme}>
        <Chip variant="outlined" color="primary" label="Active" data-testid="chip" />
      </ThemeProvider>
    );
    expect(getComputedStyle(screen.getByTestId('chip')).color).toBe(rgb(primary.main));
  });

  it('the selected tab uses the main shade for the mode', () => {
    render(
      <ThemeProvider theme={theme}>
        <Tabs
          variant="plain"
          color="primary"
          tabs={[
            { id: 'a', label: 'First' },
            { id: 'b', label: 'Second' },
          ]}
          defaultValue="a"
        />
      </ThemeProvider>
    );
    expect(getComputedStyle(screen.getByRole('tab', { name: 'First' })).color).toBe(
      rgb(primary.main)
    );
  });
});

it('dark mode uses a lighter primary than the light theme', () => {
  expect(colorScaleForMode('primary', true).main).not.toBe(
    colorScaleForMode('primary', false).main
  );
});
