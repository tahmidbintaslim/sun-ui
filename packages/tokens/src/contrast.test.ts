import { describe, expect, it } from 'vitest';

import { colorPalette, type ColorScale, type SemanticColor } from './colors';
import { sunPalette } from './palette';

// WCAG 2.x relative luminance and contrast ratio.
// https://www.w3.org/TR/WCAG21/#dfn-contrast-ratio
type Rgb = [number, number, number];

const WHITE = '#ffffff';
/** WCAG 2.1 AA minimum for normal-size text (1.4.3). */
const AA_TEXT = 4.5;

function parseColor(value: string): { rgb: Rgb; alpha: number } {
  const hex = value.match(/^#([0-9a-f]{6})$/i);
  if (hex) {
    const n = hex[1];
    return {
      rgb: [0, 2, 4].map((i) => parseInt(n.slice(i, i + 2), 16)) as Rgb,
      alpha: 1,
    };
  }
  const rgba = value.match(/^rgba\(\s*(\d+),\s*(\d+),\s*(\d+),\s*([\d.]+)\s*\)$/);
  if (rgba) {
    return {
      rgb: [Number(rgba[1]), Number(rgba[2]), Number(rgba[3])],
      alpha: Number(rgba[4]),
    };
  }
  throw new Error(`Unsupported color format: ${value}`);
}

/** Composites a possibly translucent color over an opaque backdrop. */
function flatten(value: string, backdrop: Rgb): Rgb {
  const { rgb, alpha } = parseColor(value);
  return rgb.map((c, i) => c * alpha + backdrop[i] * (1 - alpha)) as Rgb;
}

function luminance(rgb: Rgb): number {
  const [r, g, b] = rgb.map((c) => {
    const s = c / 255;
    return s <= 0.03928 ? s / 12.92 : ((s + 0.055) / 1.055) ** 2.4;
  });
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/** Contrast of text on a background, both composited over the page color. */
function contrast(foreground: string, background: string, page = WHITE): number {
  const bg = flatten(background, parseColor(page).rgb);
  const fg = flatten(foreground, bg);
  const [hi, lo] = [luminance(fg), luminance(bg)].sort((x, y) => y - x);
  return (hi + 0.05) / (lo + 0.05);
}

const semanticColors = Object.keys(colorPalette) as SemanticColor[];

describe('contrast helper', () => {
  it('matches known WCAG values', () => {
    expect(contrast('#000000', WHITE)).toBeCloseTo(21, 5);
    expect(contrast('#ffffff', WHITE)).toBeCloseTo(1, 5);
    // The audited failure this suite guards against: white on the old primary main.
    expect(contrast('#ffffff', '#0ea5e9')).toBeCloseTo(2.77, 2);
  });
});

// These pairs cover the light theme (white page). Dark-mode text contrast for
// outlined, plain and link variants is not covered yet: those variants use `main`
// as text on dark surfaces too, and no single shade reaches 4.5:1 on both.
describe.each(semanticColors)('%s tokens on a white page (WCAG AA text)', (name) => {
  const scale: ColorScale = colorPalette[name];

  it('solid: contrastText on main', () => {
    expect(contrast(scale.contrastText, scale.main)).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('solid hover: contrastText on dark', () => {
    expect(contrast(scale.contrastText, scale.dark)).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('outlined, plain and link: main on white', () => {
    expect(contrast(scale.main, WHITE)).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('outlined and link hover: dark on white', () => {
    expect(contrast(scale.dark, WHITE)).toBeGreaterThanOrEqual(AA_TEXT);
  });

  it('soft: dark on the alpha12 tint, and on the alpha20 hover tint', () => {
    expect(contrast(scale.dark, scale.alpha12)).toBeGreaterThanOrEqual(AA_TEXT);
    expect(contrast(scale.dark, scale.alpha20)).toBeGreaterThanOrEqual(AA_TEXT);
  });
});

// sunPalette feeds the MUI theme (lightTheme/darkTheme), where MUI uses `main` as
// text for outlined and text buttons, links and focused labels.
describe.each(Object.keys(sunPalette) as (keyof typeof sunPalette)[])(
  'MUI theme palette %s on a white page',
  (name) => {
    it('main on white', () => {
      expect(contrast(sunPalette[name].main, WHITE)).toBeGreaterThanOrEqual(AA_TEXT);
    });
  }
);
